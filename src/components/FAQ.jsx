import {Accordion, AccordionItem,Image} from "@nextui-org/react";
/*import { BackgroundGradient } from "../ui/background-gradient";*/
/*import './FAQ.css';*/


export default function FAQ() {
  const defaultContent =
    "You can still apply and mention that you are currently working on it.";

    const defaultContent1 =
    "You will be involved in cybersecurity-related projects that require your expertise.";

    const defaultContent2 =
    "Earnings depend on the projects and hours you contribute.";

    const defaultContent3 =
    "Yes, SafeYourWeb provides support for all client interactions and queries.";

    const defaultContent4 =
    "Our team will review your application and get back to you shortly.";

  return (
    <>
     <div className="bg-black min-h-screen flex items-center justify-center p-5">
     
     <div className="flex items-center justify-center gap-10 w-full max-w-6xl">
      <div className="w-full max-w-2xl">
    <h1 className="text-white font-bold text-2xl flex justify-center items-center h-full mt-10 mb-6 add">FREQUENTLY ASKED QUESTIONS</h1>
    <Accordion  variant="splitted">
      <AccordionItem className="bg-gray-800 text-white" key="1" aria-label="Accordion 1" title="What if I haven’t completed the SecDev certification yet?" >
      <p className="text-white">{defaultContent}</p>
      </AccordionItem>
      <AccordionItem className="bg-gray-800 text-white"  key="2" aria-label="Accordion 2" title="What kind of projects will I be working on?" >
      <p className="text-white">{defaultContent1}</p> 
      </AccordionItem>
      <AccordionItem className="bg-gray-800 text-white" key="3" aria-label="Accordion 3" title="How do I earn as a Security Captain?" >
      <p className="text-white">{defaultContent2}</p>
      </AccordionItem>
      <AccordionItem className="bg-gray-800 text-white" key="4" aria-label="Accordion 4" title="Will I receive client support from SafeYourWeb?" >
      <p className="text-white">{defaultContent3}</p> 
      </AccordionItem>
      <AccordionItem className="bg-gray-800 text-white"  key="5" aria-label="Accordion 5" title="What happens after I apply?" >
      <p className="text-white">{defaultContent4}</p> 
      </AccordionItem>
    </Accordion>
    </div>
  
      
    <div className="w-full max-w-md">
      
    <img src="./faq.png"></img>
          {/* <img className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
            src="./faq-image.png/400x400" 
            alt="Illustration"
          /> */}
          
        </div>
      </div>
    </div>

    </>
  );
}
