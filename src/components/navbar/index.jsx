import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar maxWidth="full" classNames={{
      item: [
        "flex",
        "between",
        "relative",
        "h-full",
      ]
    }}>
      <NavbarBrand className="m-10">
          <img
            src="./logotm.png"
            className="h-10 w-auto object-contain"
            alt="Logo"
          />
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 mr-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Homes
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Career
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Career
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
  );
}