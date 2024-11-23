import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";

export default function Registrationform() {
  return (
    <>
    <div className="bg-black min-h-screen flex items-center justify-center p-5">
      
      <div className="max-w-xl h-[650px] mx-auto p-4 bg-gray-700/30 rounded-lg text-white  left-5 pt-10">
      <h1 className="text-white text-center text-2xl mb-5">Apply to become Security Captain</h1>
      <form className="flex flex-col gap-7">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder:text-white-300"
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder:text-white-300"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder:text-white-300"
          />
          <input
            type="url"
            placeholder="LinkedIn Profile"
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder:text-white-300"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Certificate Status"
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder:text-white-300"
          />
          <input
            type="number"
            placeholder="Years of Experience in Cyber Security"
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder:text-white-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            placeholder="Why do you want to be a security captain?"
            required
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder:text-white-300 resize-vertical min-h-[60px]"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Upload Resume</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            className="w-full p-2 rounded-md bg-gray-600 text-white
            "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">
            Upload SecDev Certification (if completed, PDF)
          </label>
          <input
            type="file"
            accept=".pdf"
            className="w-full p-2 rounded-md bg-gray-600 text-white"
          />
        </div>
        <button
          type="submit"
          className="ml-[30%] w-[200px] p-2 rounded-md text-lg font-bold text-white bg-gradient-to-r from-gray-800 to-green-500 hover:bg-green-600 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
    </div>
  
  </>
  );
}