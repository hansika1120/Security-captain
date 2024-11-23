import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import React from 'react'

function Steps() {
    const cardData = [
        { src: "/medal.png", text: "Complete SecDev\nCertification" },
        { src: "/submit.png", text: "Submit Your\nApplication" },
        { src: "/job-interview.png", text: "Attend The\nInterview" },
        { src: "/verified.png", text: "Document Approval\n& Agreement\nSigning" },
        { src: "/onboarding.png", text: "Training &\nOnBoarding" },
      ];
    
  return (
    <div className="flex flex-row justify-between w-full px-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="overflow-hidden my-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          style={{ width: "200px" }}
        >
          <CardHeader className="pl-4">
            <Image
              className="object-cover border-none"
              src={card.src}
              alt="card background"
              height={40}
              width={40}
            />
          </CardHeader>
          <CardBody className="flex flex-col">
            <div>{card.text}</div>
          </CardBody>
        </Card>
      ))}

    </div>
  )
}

export default Steps;