const Orphanage = require('../schemas/orphanageSchema');
const Global = require('../schemas/Global');
const Transaction = require('../schemas/transactionSchema'); // Ensure Transaction schema is imported
const { GLOBAL_ID } = require('../configs/serverConfig');

const handleDonationToAllOrphanages = async () => {
  try {
    // Fetch all orphanages and global document
    const orphanages = await Orphanage.find();
    let global = await Global.findById(GLOBAL_ID);
    if (!global) {
      throw new Error('Global document not found');
    }

    const totalOrphanages = orphanages.length;
    if (totalOrphanages === 0) {
      console.log('No orphanages available for distribution.');
      return;
    }

    const balance = global.balance;
    const part = Math.floor(balance / totalOrphanages);

    if (part > 0) {
      for (const og of orphanages) {
        console.log("Distributing funds to orphanage:", og.name);

        // Update orphanage's amountReceived
        await Orphanage.findByIdAndUpdate(
          og._id,
          { $inc: { amountReceived: part } }
        );

        // Deduct the part from the global balance
        global = await Global.findByIdAndUpdate(
          GLOBAL_ID,
          { $inc: { balance: -part } },
          { new: true }
        );

        // Create a transaction record
        const transaction = await Transaction.create({
          debit: GLOBAL_ID,
          credit: og._id,
          note: "Funds credited through auto payment scheduler",
          amount : data.amount
        });

        // Add transaction to the orphanage's transactions
        await Orphanage.findByIdAndUpdate(
          og._id,
          { $push: { transactions: transaction._id } }
        );
      }
      console.log("Funds distributed successfully.");
    } else {
      console.log("Insufficient balance for distribution.");
    }
  } catch (error) {
    console.error("Error in handleDonationToAllOrphanages:", error.message);
  }
};

module.exports = handleDonationToAllOrphanages;
