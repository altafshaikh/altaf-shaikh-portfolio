import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function contentstackNavbar({ logo }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="mx-5 pt-3">
        <Navbar.Brand href="#contentstack">
          <Image
            src={logo}
            alt="contentstack company logo"
            width={200}
            height={35}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav className="ml-auto">
            <Link href="/">
              <a className={["nav-link", navStyles["nav-links"]].join(" ")}>
                Home
              </a>
            </Link>
            <Nav.Link href="#Product" className={navStyles["nav-links"]}>
              Product
            </Nav.Link>
            <Nav.Link href="#Education" className={navStyles["nav-links"]}>
              Education
            </Nav.Link>
            <Nav.Link href="#Partners" className={navStyles["nav-links"]}>
              Partners
            </Nav.Link>
            <Nav.Link href="#Company" className={navStyles["nav-links"]}>
              Company
            </Nav.Link>
            <Nav.Link href="#Pricing" className={navStyles["nav-links"]}>
              Pricing
            </Nav.Link>
            <Button
              className={["px-4 ml-3", navStyles["try-btn"]].join(" ")}
              variant="primary"
            >
              Try For Free
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
