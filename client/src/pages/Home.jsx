import React from "react";
import "../styles/Home.css";
import WorkCard from "../components/WorkCard";
function Home() {
  return (
    <div className="home">
      <div className="title-card">
        <div className="title-card-quote">
          <p>A HELPING HAND CAN HEAL BEYOND THE LAND</p>
        </div>
      </div>
      <div className="home-middle">
        <h1 >It is our mission to help those in crisis by :</h1>
        <div className="work-layout">
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        </div>
      </div>
      <div className="home-footer-banner">
        <div className="home-footer-banner-img" />
        <div className="home-footer-banner-context-div">
        <br /><br />
          <h1>HopeBridge: Unite, Donate, and Empower Orphanages Globally</h1>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure porro
            qui nisi soluta voluptatem in recusandae accusantium saepe, corrupti
            possimus vitae quos! Voluptas vero dicta odio iure reprehenderit
            voluptatem delectus tempora explicabo doloribus est assumenda, at
            quibusdam, minus quia autem modi illum culpa minima excepturi. Error
            aut maiores nemo quas?
          </p>
          <br />
          <button>join us</button>
        </div>
      </div>
      {/* <div class="bg-red-500 text-white p-4">
  If this text has a red background, Tailwind is working!
</div> */}
      <div className="footer">
        
      </div>
    </div>
  );
}

export default Home;
