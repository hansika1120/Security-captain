// components/BenefitItem.js
//import React from "react";

const BenefitItem = ({ icon, title, text, points }) => (
  <div className="benefit-item">
    <div className="benefit-icon">{icon}</div>
    <div className="benefit-title">{title}</div>
    <p className="benefit-text">{text}</p>
    <ul className="benefit-points">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default BenefitItem;
