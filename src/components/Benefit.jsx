import { Card, Image } from "@nextui-org/react";

const cardData = [
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

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-8" id="Perks">
      <div className="max-w-[900px] grid grid-cols-12 gap-6 w-full"> {/* Increased gap */}
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="col-span-12 sm:col-span-4 h-[350px] overflow-hidden relative group rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            {/* Background Image */}
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://www.shutterstock.com/image-vector/dim-green-blue-background-wave-600nw-2251675777.jpg"
            />
            
            {/* Overlay with Content */}
            <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-start justify-center p-6 space-y-3 transition-all duration-300 group-hover:bg-black/40">
              {/* Icon and Title */}
              <h4 className="text-white text-xl font-bold flex items-center space-x-2 transition-colors duration-300 group-hover:text-green-300">
                <span className="text-2xl">{card.icon}</span>
                <span>{card.title}</span>
              </h4>
              
              {/* Text Description */}
              <p className="text-white text-sm transition-colors duration-300 group-hover:text-yellow-100">
                {card.text}
              </p>
              
              {/* Points List */}
              <ul className="text-white/90 text-xs space-y-1 list-disc pl-5 transition-colors duration-300 group-hover:text-yellow-50">
                {card.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
