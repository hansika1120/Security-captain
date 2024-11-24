import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { transform } from "framer-motion";

export default function App() {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState("home");

  // Function to update the active link and scroll to the section
  const handleLinkClick = (link) => {
    setActiveLink(link);

    // Scroll to the section with the corresponding ID
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar
        maxWidth="full"
        classNames={{
          item: ["flex", "between", "relative", "h-full"],
        }}
      >
        <NavbarBrand className="m-10">
          <img
            src="./logotm.png"
            className="h-10 w-auto object-contain"
            alt="Logo"
          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 mr-10" justify="center">
          {["Home", "Perks", "Voices", "Guidance","Contact"].map((link) => (
            <NavbarItem key={link}>
              <Link
                style={{
                  textDecoration: activeLink === link ? "underline" : "none", // Add underline for active link
                  fontSize: activeLink === link ? "1.1rem" : "1rem", // Scale up active link
                  transform: activeLink === link ? "scale(1.1)" : "scale(1)", // Smooth scaling
                  transition: "all 0.3s ease", // Add smooth transition
                }}
                color={activeLink === link ? "success" : "foreground"} // Green for active
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleLinkClick(link);
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </>
  );
}

// import { useState } from "react";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
// import { style } from "framer-motion/client";

// export default function App() {
//   // State to manage the active link
//   const [activeLink, setActiveLink] = useState("home");

//   // Function to update the active link
//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <Navbar
//       maxWidth="full"
//       classNames={{
//         item: [
//           "flex",
//           "between",
//           "relative",
//           "h-full",
//         ],
//       }}
//     >
//       <NavbarBrand className="m-10">
//         <img
//           src="./logotm.png"
//           className="h-10 w-auto object-contain"
//           alt="Logo"
//         />
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-10 mr-10" justify="center">
//         <NavbarItem>
//           <Link
//             style={{textDecoration: "none"}}
//             color={activeLink === "home" ? "success" : "foreground"} // Green for active
//             href="#"
//             onClick={() => handleLinkClick("home")}
//           >
//             Homes
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link
//             style={{textDecoration: "none"}}
//             color={activeLink === "services" ? "success" : "foreground"} // Green for active
//             href="#"
//             onClick={() => handleLinkClick("services")}
//           >
//             Services
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link
//             style={{textDecoration: "none"}}
//             color={activeLink === "career" ? "success" : "foreground"} // Green for active
//             href="#"
//             onClick={() => handleLinkClick("career")}
//           >
//             Career
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link
//             style={{textDecoration: "none"}}
//             color={activeLink === "about" ? "success" : "foreground"} // Green for active
//             href="#"
//             onClick={() => handleLinkClick("about")}
//           >
//             About
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
