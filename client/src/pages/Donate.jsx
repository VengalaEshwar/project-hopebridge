import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Donation.css";
import DonateFeatureCard from "../components/DonateFeatureCard";
import Gallery from "../components/Gallery";
import DonateForm from "../components/DonateForm";
function Donate() {
  const navigate = useNavigate();
  const handleDonateClick = () => {
    console.log("clicked donate button");
    setShowDonation(!showDonation);
  };

  const [showDonation, setShowDonation] = useState(false);
  return (
    <div className="donate">
      <div className="donation-header" />

      <div className="donation-need-container">
        <h1>Donate to OrphanCare to Help us Nurture our Children</h1>
        <div className="donate-need-image" />
        <h1>
          Why do <span className="text-red-500">donations</span> matter?
        </h1>
        <p>
          Our non-profit foundation is entirely reliant on corporate and private
          donors to finance the programmes and goal of providing less fortunate
          children with the comfort, care, and treatment of a home, as well as
          the promise of a better future. It is impossible for us to continue
          the work that we’re doing without your help. Your donation will ensure
          a positive impact on the livelihoods of children and young people in
          Malaysia, as well as guaranteeing the sustainability of our
          organization so that we may continue to help the little ones secure
          happy, healthy futures.
        </p>
      </div>

      
      <div className="donate-child-button-container flex items-center justify-center">
        <span>
          <span className="text-3xl text-white px-10">
            Meet The waiting children
          </span>
          <button
            onClick={() => {
              navigate("/children");
            }}
          >
            Children
          </button>
        </span>
        <div className="vertical-line"></div>
        <span>
          <span className="text-3xl text-white px-10">Watch the blogs</span>
          <button
            onClick={() => {
              navigate("/blogs");
            }}
          >
            Blogs
          </button>
        </span>
      </div>
      <div className="donate-feature-cards-section">
        <DonateFeatureCard />
        <DonateFeatureCard />
        <DonateFeatureCard />
        <DonateFeatureCard />
      </div>
      <div className="donate-child-button-container flex items-center justify-center">
        <span>
          <span className="text-3xl text-white px-10">
            Raise your hands towards the needy
          </span>
          <button onClick={handleDonateClick}>Donate</button>
        </span>
      </div>
      {showDonation && <DonateForm />}
      <Gallery isDonor={true} />
      <div className="donate-footer text-center text-blue-600 text-7xl">
        RISE YOUR HEPLING HANDS
      </div>
    </div>
  );
}

export default Donate;
