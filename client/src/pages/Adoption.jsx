import React, { useState } from "react";
import "../styles/Adoption.css";
import { Outlet, useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import AdoptionForm from "../components/AdoptionForm";
const adoptionRules = [
  {
    rule: "Eligibility Criteria",
    description:
      "Prospective parents must meet specific legal, financial, and health requirements.",
    explanation:
      "Adoption agencies have eligibility criteria to ensure that potential adoptive parents are capable of providing a stable, supportive, and loving home for the child. These criteria may include age limits, financial stability, health conditions, and criminal background checks. Ensuring the right fit helps to protect the well-being of the child and ensures they grow up in a secure environment.",
  },
  {
    rule: "Consent from Biological Parents",
    description: "Biological parents must give their consent for the adoption.",
    explanation:
      "In most cases, the biological parents must voluntarily agree to the adoption process. If parental rights are not terminated or the biological parents are not legally deemed unfit, their consent is necessary for the adoption to proceed. This ensures that the child's best interests are considered and respects the legal rights of the biological parents.",
  },
  {
    rule: "Home Study Requirement",
    description:
      "A thorough home study is required to assess the adoptive family's suitability.",
    explanation:
      "A home study involves a detailed assessment of the adoptive family's living situation, background, and readiness to care for a child. Social workers will visit the home, interview the family members, and review financial records, health status, and other relevant information. This step ensures that the family is prepared for the responsibilities of adoption and is capable of providing a safe and nurturing environment.",
  },
  {
    rule: "Matching Process",
    description:
      "Children are matched with families based on specific needs and preferences.",
    explanation:
      "The matching process is a critical step in adoption, where children are paired with families that best meet their emotional, psychological, and physical needs. Factors such as age, health, background, and family dynamics are considered to ensure a good fit. Matching helps ensure that both the child and the adoptive family can bond and thrive in the long term.",
  },
  {
    rule: "Post-Adoption Support",
    description:
      "Ongoing support is provided after adoption to ensure successful integration.",
    explanation:
      "After the adoption is finalized, post-adoption support services are crucial for helping families adjust and integrate the child into their new home. This support may include counseling, educational resources, and ongoing communication with adoption agencies. It ensures the well-being of the child and helps adoptive families navigate the challenges of bonding, adjustment, and long-term care.",
  },
]; //adoptionRules
const AdoptPopUpCard = ({ description, explanation }) => (
  <div className="adopt-content-box-popup">
    <h1>{description}</h1>
    <p>{explanation}</p>
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
              HopeBridge connects orphanages with families, facilitating the
              adoption process for children .Whether children have special needs
              or not, our platform provides a seamless connection, offering
              families the resources and guidance they need. We ensuresthat
              children find loving homes, regardless of their heritage or
              background. Through HopeBridge, families are empowered to make
              informed decisions, while orphanages receive much-needed support
              to ensure the well-being of their children. Our mission is to
              create brighter futures by uniting families and orphanages,
              offering a lifeline to children in need, including those with
              special needs.
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
          {adoptionRules.map(({ description, explanation }) => (
            <AdoptPopUpCard
              description={description}
              explanation={explanation}
              key={description}
            />
          ))}
        </div>

        <div className="adopt-content-box-buttons">
          <div className="adopt-content-box-buttons-1 adopt-content-box-button">
            <h1>View Children </h1>
            <p>
              Our platform offers a simple way to connect with orphanages and
              view detailed information about each child, including their age,
              health, and background. Start your journey to make a meaningful
              difference in a child's life today
            </p>
            <button
              className="adopt-page-button"
              onClick={() => navigate("/children")}
            >
              children
            </button>
          </div>
          <div className="adopt-content-box-buttons-2 adopt-content-box-button">
            <h1>Find Children Using AI Search</h1>
            <p>
              Use our AI-powered search to find children available for adoption
              based on specific traits, needs, or preferences. The AI algorithm
              helps filter and suggest profiles that best match your criteria,
              making it easier for families to find a perfect match.
            </p>
            <button
              className="adopt-page-button"
              onClick={() => navigate("/ai-search")}
            >
              AI Search
            </button>
          </div>
          <div className="adopt-content-box-buttons-3 adopt-content-box-button">
            <h1>Adoption Application Form</h1>
            <p>
              Start your adoption journey by filling out our easy-to-use
              application form. This form gathers essential information about
              your family, preferences, and readiness to adopt, helping us match
              you with children in need of a loving home. 
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
