import React, { useState } from "react";

const GradientButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundImage: isHovered
          ? "linear-gradient(45deg, #36d1dc, #5b86e5)"
          : "linear-gradient(45deg, #ff6b6b, #ffcc00)",
        border: "none",
        borderRadius: "8px",
        color: "white",
        padding: "12px 24px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-image 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default GradientButton;
