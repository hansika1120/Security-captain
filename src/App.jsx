import Steps from './components/Steps.jsx';
import Testimonial from './components/Testimonial.jsx';
import FAQ from './components/FAQ.jsx';
import Registrationform from './components/Registration-form.jsx';
import WobbleCard from './components/card/wobbleCard.jsx';
import { fadeIn } from './components/variants.jsx';
import {motion} from "framer-motion";
import Nav from "./components/navbar";
import './App.css';
import Footer from "./components/Footer.jsx";
import Benefit from "./components/Benefit.jsx";

function App() {
  return (
    <>
    {/*  */}
      <Nav />
    <div className="min-h-screen flex flex-col bg-background text-foreground com-bg" id='Home'>
      <motion.div className="text-center m-28 heading min-h-screen bg">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}  b
          className="text-7xl font-semibold m-4 greyh"
        >
          Become a <span className="spanText1">"SECURITY CAPTAIN"</span><br/>
        at{" "}
        <span className="spanText2">
          Safe<span className="st2">Your</span>Web
        </span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="sub-title text-xl"
        >
          Join an elite group of cybersecurity solopreneurs and lead the charge
          in securing the digital world.
        </motion.p>
        <motion.div className="container"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
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

      <h1 className="text-center text-3xl font-extrabold mt-8 mb-4 text-white-600 shadow-md">
    Why Become a <span style={{ background: 'linear-gradient(109.6deg, rgb(0, 204, 130) 11.2%, rgb(58, 181, 46) 91.7%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Security Captain</span>?
</h1>

      <Benefit />

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
      
      <Footer />

    </>
  );
}

export default App;
