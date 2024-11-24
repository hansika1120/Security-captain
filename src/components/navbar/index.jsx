// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

// export default function App() {
//   return (
//     <Navbar maxWidth="full" classNames={{
//       item: [
//         "flex",
//         "between",
//         "relative",
//         "h-full",
//       ]
//     }}>
//       <NavbarBrand className="m-10">
//           <img
//             src="./logotm.png"
//             className="h-10 w-auto object-contain"
//             alt="Logo"
//           />
//         </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-10 mr-10" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Homes
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Services
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Career
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Career
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             About
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       </Navbar>
//   );
// }
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function App() {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState("home");

  // Function to update the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      maxWidth="full"
      classNames={{
        item: [
          "flex",
          "between",
          "relative",
          "h-full",
        ],
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
        <NavbarItem>
          <Link
            style={{textDecoration: "none"}}
            color={activeLink === "home" ? "success" : "foreground"} // Green for active
            href="#"
            onClick={() => handleLinkClick("home")}
          >
            Homes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            style={{textDecoration: "none"}}
            color={activeLink === "services" ? "success" : "foreground"} // Green for active
            href="#"
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            style={{textDecoration: "none"}}
            color={activeLink === "career" ? "success" : "foreground"} // Green for active
            href="#"
            onClick={() => handleLinkClick("career")}
          >
            Career
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            style={{textDecoration: "none"}}
            color={activeLink === "about" ? "success" : "foreground"} // Green for active
            href="#"
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
