import React, { useState } from "react";
import toast from "react-hot-toast";
import PaymentCard from "./PaymentCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axiosInstance";
function DonateForm() {
  
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    amount: "",
    donationType: "global",
    orphanageId: "",
    comments: "",
    userID : useSelector((state)=>state?.auth?.data?.id)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [showPaymentOptions, setshowPaymentOptions] = useState(false);
  const [showPayment, setshowPayment] = useState(false);
  const handlePayment = async () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    let response =  axiosInstance.post("/donate", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.promise(response.then((res) => {setshowPayment(!showPayment);return res}), {
      loading: "Hold on, your donation is being processed...",
    });
    response = await response;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.amount <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }
    setshowPaymentOptions(!showPaymentOptions);
  };
  const orphanages = useSelector((state) => state.orphanages);
  return (
    <div className="donate-form-container ">
      {!showPaymentOptions ? (
        <>
          <h2>Donate Now</h2>
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
                id="donationType"
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
              >
                <option value="global">Global</option>
                <option value="specific">Specific</option>
              </select>
            </div>

            {formData.donationType === "specific" && (
              <div className="form-group">
                <label htmlFor="orphanageId">select Orphanage ID</label>
                <select
                  id="orphanageId"
                  name="orphanageId"
                  value={formData.orphanageId}
                  onChange={handleChange}
                >
                  {orphanages &&
                    orphanages.map((orphanage) => (
                      <option value={orphanage._id}>{orphanage.name}</option>
                    ))}
                </select>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <input
                type="text"
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Enter comments"
              />
            </div>

            <button type="submit" className="submit-button">
              Donate
            </button>
          </form>
        </>
      ) : !showPayment ? (
        <div className="payment-options">
          <h3>Confirm and Pay</h3>
          <p>Name: {formData.donorName}</p>
          <p>Email: {formData.donorEmail}</p>
          <p>Amount: ₹{formData.amount}</p>
          {formData.donationType === "specific" && (
            <p>Orphanage ID: {formData.orphanageId }</p>
          )}
          <div className="payment-buttonss flex m-5">
            <button
              onClick={handlePayment}
              className="confirm-payment-button bg-green-400 p-2 m-auto rounded-lg hover:bg-green-500"
            >
              Proceed to Payment
            </button>
            <button
              onClick={() => {
               setshowPaymentOptions(!showPaymentOptions);
              }}
              className="confirm-payment-button bg-red-400 p-2 m-auto rounded-lg hover:bg-red-500"
            >
              cancel
            </button>
          </div>
        </div>
      ) : (
        <PaymentCard />
      )}
    </div>
  );
}

export default DonateForm;
