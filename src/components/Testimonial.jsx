import { Card, CardHeader, CardBody, CardFooter, Avatar, Image } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// TestimonialCard component with animation on scroll
function TestimonialCard({ name, imageUrl, stars, text, animation }) {
  return (
    <div
      data-aos={animation} // Add AOS animation to the card
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="py-4 mx-2"
    >
      <Card className="py-4 border-2 rounded- 2px border-solid border-white pb-6 min-h-full" style={{ width: "250px" }}>
        <CardHeader className="pt-2 px-4 flex flex-row justify-start items-center">
          <div className="flex flex-row space-x-1">
            {stars.map((_, index) => (
              <Image
                key={index}
                alt="Star rating"
                className="object-cover"
                src="star.png"
                width={15}
              />
            ))}
          </div>
        </CardHeader>

        <CardBody className="overflow-visible py-2 flex flex-col items-start px-4">
          <div className="mt-2 text-left">
            <p>{text}</p>
          </div>
        </CardBody>

        <CardFooter className="flex flex-row justify-start space-x-3 items-center">
          <Avatar src={imageUrl} />
          <span>{name}</span>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to repeat when scrolling back
    });
  }, []);

  const testimonials = [
    {
      name: "ABC",
      imageUrl:
        "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      stars: [1, 1, 1, 1, 1],
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto animi eos amet.",
      animation: "flip-left", // Unique animation for each card
    },
    {
      name: "DEF",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
      stars: [1, 1, 1, 1, 1],
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      animation: "zoom-in",
    },
    {
      name: "GHI",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      stars: [1, 1, 1, 1, 1],
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      animation: "fade-right",
    },
    {
      name: "JKL",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      stars: [1, 1, 1, 1],
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      animation: "fade-up",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-10">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          imageUrl={testimonial.imageUrl}
          stars={testimonial.stars}
          text={testimonial.text}
          animation={testimonial.animation} // Pass animation type to each card
        />
      ))}
    </div>
  );
}
