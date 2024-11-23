import React, { useRef, useEffect } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";

const WobbleCard = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const divElement = divRef.current;
    if (divElement) {
      divElement.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (divElement) {
        divElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.div 
    variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
    className="mycard" ref={divRef}>
        <div className="background-image"></div>
      <p className="greyh text-head">
        Your Journey to Becoming a
        <span className="gradeint-text"> Security Captain</span> Starts Here
      </p>
      <p className="sub-title1">
        Before applying to become a Security Captain, you must fulfill the
        following requirements:
      </p>
      <div className="list-img">
        <ul className="list">
          <li className="list-items">
            Transform Your Career with<span className="green"> SecDev </span>
            Certification.<br></br>
            <span className="small">
              Complete SecDev Certification with SafeYourWeb's 100% OFF coupon.
              ( <a href="#"> Click Here to apply</a> )
            </span>
          </li>
          <li className="list-items">Pass a rigorous interview proces.</li>
          <li className="list-items">
            Submit approved documents and sign our partnership agreement.
          </li>
          <li className="list-items">
            Complete our specialized client acquisition and project management
            training.
          </li>
        </ul>
        <img src="./shield.png"></img>
      </div>
    </motion.div>
  );
};

export default WobbleCard;
