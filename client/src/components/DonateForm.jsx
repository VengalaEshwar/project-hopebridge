import React, { useState } from "react";
import Razorpay from 'razorpay'
function DonateForm() {
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    amount: "",
    type: "global",
    orphanageId: "",
  });

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const initiatePayment = () => {
    if (!window.Razorpay) {
      alert("Payment library not loaded. Please refresh the page.");
      return;
    }
  
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
      amount: formData.amount * 100, // Convert amount to paisa
      currency: "INR",
      name: "Donation",
      description: "Donation Payment",
      handler: function (response) {
        setTransactionDetails(response);
        alert(`Payment successful! Transaction ID: ${response.razorpay_payment_id}`);
        // Save the payment details to the backend here
      },
      prefill: {
        name: formData.donorName,
        email: formData.donorEmail,
      },
      theme: {
        color: "#007bff",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setShowPaymentOptions(true);
  };

  return (
    <div className="donate-form-container">
      <h2>Donate Now</h2>
      {!showPaymentOptions ? (
        <form onSubmit={handleSubmit} className="donate-form">
          <div className="form-group">
            <label htmlFor="donorName">Your Name</label>
            <input
              type="text"
              id="donorName"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="donorEmail">Your Email</label>
            <input
              type="email"
              id="donorEmail"
              name="donorEmail"
              value={formData.donorEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Donation Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Donation Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="global">Global</option>
              <option value="specific">Specific</option>
            </select>
          </div>

          {formData.type === "specific" && (
            <div className="form-group">
              <label htmlFor="orphanageId">Orphanage ID</label>
              <input
                type="text"
                id="orphanageId"
                name="orphanageId"
                value={formData.orphanageId}
                onChange={handleChange}
                placeholder="Enter orphanage ID"
                required={formData.type === "specific"}
              />
            </div>
          )}

          <button type="submit" className="submit-button">Donate</button>
        </form>
      ) : (
        <div className="payment-options">
          <h3>Confirm and Pay</h3>
          <p>Name: {formData.donorName}</p>
          <p>Email: {formData.donorEmail}</p>
          <p>Amount: ₹{formData.amount}</p>
          {formData.type === "specific" && <p>Orphanage ID: {formData.orphanageId}</p>}
          <button onClick={initiatePayment} className="confirm-payment-button">Proceed to Payment</button>
        </div>
      )}

      {transactionDetails && (
        <div className="transaction-details">
          <h3>Transaction Details</h3>
          <p>Transaction ID: {transactionDetails.razorpay_payment_id}</p>
          <p>Order ID: {transactionDetails.razorpay_order_id}</p>
          <p>Signature: {transactionDetails.razorpay_signature}</p>
        </div>
      )}
    </div>
  );
}

export default DonateForm;
