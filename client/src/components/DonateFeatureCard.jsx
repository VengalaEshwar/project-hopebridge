import React from "react";

function DonateFeatureCard({title, description}) {
  return (
    <div className="donate-feature-card">
      <h1>{title}</h1>
      <p >{description}</p>
    </div>
  );
}

export default DonateFeatureCard;
