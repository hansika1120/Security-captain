import Steps from './components/Steps.jsx';
import Testimonial from './components/Testimonial.jsx';
import FAQ from './components/FAQ.jsx';
import Registrationform from './components/Registration-form.jsx';
import WobbleCard from './components/card/wobbleCard.jsx';
import { fadeIn } from './components/variants.jsx';
import {motion} from "framer-motion";
import Nav from "./components/navbar";
import './App.css';


function App() {
  return (
    <>
    {/*  */}
    <div className="min-h-screen flex flex-col bg-background text-foreground com-bg">
      <Nav />
      <motion.div className="text-center m-28 heading min-h-screen">
        <motion.h1
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}  b
          className="text-7xl font-semibold m-4 greyh"
        >
          Become a <span className="spanText1">"SECURITY CAPTAIN"</span>
          <img src="./captain.png" className="cap-icon" alt="Cap Icon"></img>
        </motion.h1>
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-6xl font-semibold m-4"
        >
          at{" "}
          <span className="spanText2">
            Safe<span className="st2">Your</span>Web
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="sub-title text-xl"
        >
          Join an elite group of cybersecurity solopreneurs and lead the charge
          in securing the digital world.
        </motion.p>
        <motion.div className="container">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="center"
          >
            <button className="btn">
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="hl-line"
                />
              </svg>
              <span>Apply Now</span>
            </button>
          </motion.div>
        </motion.div>
      <WobbleCard/>
      </motion.div>
    </div>
    {/*  */}
      {/* Section Header for Steps */}
      <div className="font-bold text-2xl flex justify-center items-center h-full mt-10 mb-6 add">
        Let's Get Started
      </div>

      {/* Steps Component with spacing */}
      <div className="mb-16"> {/* Adds margin-bottom to create space below the Steps component */}
        <Steps />
      </div>

      {/* Section Header for Testimonials */}
      <div className="font-bold text-2xl flex justify-center items-center h-full mt-10 mb-6 add">
        "Client Testimonials: Our Work Speaks for Itself"
      </div>

      {/* Testimonial Component */}
      <div className="mb-16"> {/* Adds margin-bottom to create space below the Testimonial component */}
        <Testimonial />
      </div>
      <Registrationform></Registrationform>
      <FAQ></FAQ>
      
    </>
  );
}

export default App;
