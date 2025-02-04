import React, { useState,useEffect } from 'react';
import axiosInstance from '../helpers/axiosInstance';
import { useSelector } from 'react-redux';
// import './OrphanageTransaction.css'; // Optional: Add CSS for styling

function Transaction({ transaction }) {
  return (
    <div className="transaction">
      <p><strong>Transaction ID:</strong> {transaction._id}</p>
      <p><strong>Creditor ID:</strong> {transaction.credit}</p>
      <p><strong>Amount:</strong> {transaction.amount}rs</p>
      <p><strong>Date:</strong> {transaction?.transactionDate.split("T")[0]}</p>
      <p><strong>Details:</strong> {transaction.note}</p>
    </div>
  );
}

// {
//   id: 'TX123457',
//   creditorName: 'Jane Smith',
//   amount: 300,
//   date: '2025-01-14',
//   details: 'Monthly food donation.',
// },
function UserDonations() {
  const transactions = useSelector((state)=>state.user.transactions);
  const [userTransactions,setUserTransactions] = useState([]);
  useEffect(()=>{
    const fetchTransactions = async () => {
      try {
        const responses = await Promise.all(
          transactions.map(async (id) => {
            const response = await axiosInstance.get(`donate/transaction/${id}`);
            return response.data.transaction;
          })
        );
        setUserTransactions(responses); // Update state only once
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    // if (userTransactions.length > 0) {
      fetchTransactions();
    // }
  },[]);
  return (
    <div className="orphanage-transaction">
      <h2 className="text-red-400 text-4xl text-center">Donations</h2>
      {userTransactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default UserDonations;
