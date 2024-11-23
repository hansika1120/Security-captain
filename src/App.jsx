import Steps from './components/Steps.jsx';
import Testimonial from './components/Testimonial.jsx';


function App() {
  return (
    <>
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
      
    </>
  );
}

export default App;
