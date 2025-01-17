import React, { useState } from "react";
import "../styles/Adoption.css";
import { Outlet, useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import AdoptionForm from "../components/AdoptionForm";

const AdoptPopUpCard = () => (
  <div className="adopt-content-box-popup">
    <h1>Lorem ipsum dolor sit amet consectetur Eshwar elit</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum
      explicabo numquam non deleniti laborum quas possimus cumque, eveniet vitae
      vero ea? Perferendis voluptatem repellendus ipsum! Dicta sunt officiis at,
      nisi omnis perferendis minima suscipit, deleniti tenetur saepe unde
      repellat doloribus sint inventore commodi aspernatur quidem labore,
      assumenda ullam molestias sit? Odio incidunt repudiandae ex quo aliquam
      distinctio libero, dolor non in totam adipisci, sit quod accusantium
      facere architecto necessitatibus molestias illo vero obcaecati a modi
      animi nihil iste quas! Provident, iure aspernatur beatae a doloremque
      velit optio sint, molestiae dolorum doloribus eaque quia corrupti ipsam
      impedit, placeat maiores quae.
    </p>
  </div>
);

const Adoption = () => {
  const [adoptForm, setAdoptForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="adopt">

        <div className="title-card-adopt" />

        <div className="adopt-content-box">
          {/* THis block containt about the children */}
          <div className="adopt-content-box-left">
            <h1>About the Children</h1>
            <p>
              There are close to 1,000 children on India’s CARINGs site. Most
              have moderate to severe special needs. Families with Indian
              heritage may wait for a direct referral from CARA of a healthier
              child. Families without Indian heritage must be open to a child
              with special needs. Waiting Children are between 6 months and 16
              years of age. The India program includes three categories,
              relative to your heritage:
            </p>
          </div>
              {/* photo collages */}
          <div className="adopt-content-box-right">
            <div className="adopt-content-box-right-img1"></div>
            <div className="adopt-content-box-right-img2"></div>
            <div className="adopt-content-box-right-img3"></div>
            <div className="adopt-content-box-right-img4"></div>
            <div className="adopt-content-box-right-img5"></div>
            <div className="adopt-content-box-right-img6"></div>
          </div>

        </div>





        <div className="adopt-content-box-popup-box">
          <AdoptPopUpCard />
          <AdoptPopUpCard />
          <AdoptPopUpCard />
          <AdoptPopUpCard />
          <AdoptPopUpCard />
        </div>

        <div className="adopt-content-box-buttons">
          <div className="adopt-content-box-buttons-1">
            <h1>heading 1</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              soluta iusto exercitationem laboriosam, dolores enim totam ratione
              quasi non, ipsam beatae provident cupiditate voluptate nemo!
            </p>
            <button
              className="adopt-page-button"
              onClick={() => navigate("/children")}
            >
              children
            </button>
          </div>
          <div className="adopt-content-box-buttons-2">
            <h1>heading 2</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              soluta iusto exercitationem laboriosam, dolores enim totam ratione
              quasi non, ipsam beatae provident cupiditate voluptate nemo!
            </p>
            <button
              className="adopt-page-button"
              onClick={() => navigate("/ai-search")}
            >
              AI Search
            </button>
          </div>
          <div className="adopt-content-box-buttons-3">
            <h1>heading 3</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              soluta iusto exercitationem laboriosam, dolores enim totam ratione
              quasi non, ipsam beatae provident cupiditate voluptate nemo!
            </p>
            <button
              className="adopt-page-button"
              onClick={() => {
                setAdoptForm(!adoptForm);
              }}
            >
              Application Form
            </button>
          </div>
        </div>



        {adoptForm ? <AdoptionForm /> : null}
        
        <Gallery isDonor={false} />
        <div className="adopt-footer">♡HAPPY FAMILY♡</div>

      </div>
    </>
  );
};

export default Adoption;
