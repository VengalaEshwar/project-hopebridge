import React, { useEffect } from "react";
import "../styles/Home.css";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import EmergencyButton from "../components/EmergencyButton";
import { useNavigate } from "react-router-dom";
const workCardData = [
  "Seamlessly facilitating global donations for orphanages.",
  "Streamlining adoption processes across international borders.",
  "Building a network connecting orphanages worldwide.",
  "Sharing resources and stories through insightful blogs.",
  "AI-driven support for personalized orphan care.",
  "Providing emergency aid for orphans in crisis.",
];
const icons = [
  "fa-solid fa-hand-holding-medical",
  "fa-solid fa-user",
  "fa-solid fa-globe",
  "fa-brands fa-blogger",
  "fa-solid fa-atom",
  "fa-solid fa-person-shelter"
]
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="title-card">
        <div className="title-card-quote">
          <p>A HELPING HAND CAN HEAL BEYOND THE LAND</p>
        </div>
      </div>

      <div className="home-middle">
        <h1>Our mission is to empower lives by:</h1>
        <div className="work-layout">
          {workCardData.map((data,index) => {
            return <WorkCard data={data} key={index} icon={icons[index]}/>;
          })}
        </div>
      </div>

      <div className="home-footer-banner">
        <div className="home-footer-banner-img" />

        <div className="home-footer-banner-context-div">
          <h1>HopeBridge: Unite, Donate, and Empower Orphanages Globally</h1>
          <br />
          <p>
            <p className="text-blue-600">Bridging Hearts, Transforming Lives.</p> HopeBridge is
            dedicated to transforming orphan care by connecting global
            communities. Our platform facilitates seamless donations, offers
            AI-driven support, and simplifies the adoption process. We provide
            emergency aid to orphanages in crisis and share valuable insights
            through blogs, uniting people to create lasting change for orphaned
            children worldwide. Together, we bridge hearts and empower the
            future, offering hope to those in need.
          </p>
          <br />
          <button onClick={() => navigate("/signup")}>join us</button>
        </div>
      </div>
      <Footer />
      <EmergencyButton />
    </div>
  );
}

export default Home;
