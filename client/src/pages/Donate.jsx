import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Donation.css";
import DonateFeatureCard from "../components/DonateFeatureCard";
import Gallery from "../components/Gallery";
import DonateForm from "../components/DonateForm";
const donationOptions = [
  {
    title: "Donate: Orphanages Through HopeBridge",
    description: "Your donation directly supports orphanages connected through HopeBridge, providing critical resources such as food, shelter, and medical care. Every contribution helps improve the lives of children in need and supports orphanages in giving them a better, brighter future."
  },
  {
    title: "Donate to All Orphanages Globally",
    description: "By donating to all orphanages, you contribute to a global fund that will be distributed to orphanages in need across the world. This ensures that even the most underserved orphanages receive support, helping children from diverse backgrounds with essential resources for growth and development."
  },
  {
    title: "Donate for Education",
    description: "Education is key to a child’s future. Your donation can go directly towards funding educational resources, school supplies, and even scholarships, giving children the opportunity to thrive academically and succeed in life."
  },
  {
    title: "Donate to NGOs Supporting Children",
    description: "Support NGOs that are working alongside HopeBridge to provide care, education, and rehabilitation to children in orphanages. Your contribution helps these organizations carry out their important work, providing children with the tools they need to grow and develop in a loving environment."
  }
];

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
        <h1>Donate Through HopeBridge to Help Us Nurture Our Children</h1>
        <div className="donate-need-image" />
        <h1>
          Why do <span className="text-red-500">donations</span> matter?
        </h1>
        <p>
          Donating through HopeBridge directly supports orphanages and children
          in need across the globe. Your contribution helps provide essential
          resources like education, healthcare, and food, and plays a vital role
          in connecting children with loving families. Donations are crucial for
          ensuring that every child receives the care and opportunities they
          deserve, from nurturing their immediate needs to supporting their
          long-term growth and adoption process. Your generosity can make a
          meaningful difference in the lives of children and help brighten their
          future.
        </p>
      </div>

      <div className="donate-child-button-container ">
        <span>
          <span className="text-3xl text-white px-10 max-md:text-lg">
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
        <div className="vertical-line max-md:hidden"></div>
        <span>
          <span className="text-3xl text-white px-10 max-md:text-lg">
            Watch the blogs
          </span>
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
        {donationOptions.map((data)=><DonateFeatureCard title={data.title} description={data.description}/>)}
      </div>

      <div className="donate-child-button-container flex items-center justify-center">
        <span>
          <span className="text-3xl text-white px-10 max-md:text-lg">
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
