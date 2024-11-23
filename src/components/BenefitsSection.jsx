// components/BenefitsSection.js
//import React from "react";
import BenefitItem from "./BenefitItem";
import "./Benefits.css";

const benefitsData = [
  {
    icon: "💼",
    title: "Independent Work",
    text: "Freedom to work independently as a solopreneur.",
    points: [
      "Set your own hours and schedule",
      "Ability to take on projects you choose",
      "Develop your skills at your pace",
    ],
  },
  {
    icon: "🔒",
    title: "Brand Resources",
    text: "Use of SafeYourWeb brand and resources.",
    points: [
      "Access to branded materials for credibility",
      "Enhanced visibility with marketing resources",
      "Professional support from the SafeYourWeb team",
    ],
  },
  {
    icon: "🎓",
    title: "Exclusive Training",
    text: "Access to exclusive training and ongoing development.",
    points: [
      "Regular workshops and skill-building sessions",
      "Updates on the latest cybersecurity trends",
      "One-on-one coaching opportunities",
    ],
  },
  {
    icon: "🤝",
    title: "Project Support",
    text: "Support for projects with large-scale clients.",
    points: [
      "Guidance for managing larger accounts",
      "Resources to meet high client expectations",
      "Technical support from SafeYourWeb experts",
    ],
  },
  {
    icon: "🌟",
    title: "Personal Brand",
    text: "Build a strong personal brand in cybersecurity.",
    points: [
      "Showcase your skills and expertise",
      "Opportunities for public speaking and networking",
      "Build trust and credibility with clients",
    ],
  },
];

const BenefitsSection = () => (
  <div className="benefits-section">
    <h2 className="benefits-title">Why Become a Security Captain?</h2>
    <div className="benefits-list">
      {benefitsData.map((benefit, index) => (
        <BenefitItem
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          text={benefit.text}
          points={benefit.points}
        />
      ))}
    </div>
  </div>
);

export default BenefitsSection;
