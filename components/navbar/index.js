import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function topNavbar({ logo }) {
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="light" className="pt-3">
        <Navbar.Brand href="#altaf">
          <h1 className={navStyles["name"]}>
            Altaf<span className={navStyles["surname"]}>.Shaikh</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="text-center mr-5"
        >
          <Nav
            className={["ml-auto", navStyles["nav-item-container"]].join(" ")}
          >
            <Link href="/">
              <a className={["nav-link", navStyles["nav-links"]].join(" ")}>
                Home
              </a>
            </Link>
            <Nav.Link href="#Product" className={navStyles["nav-links"]}>
              Blogs
            </Nav.Link>
            <Nav.Link href="#Education" className={navStyles["nav-links"]}>
              Talks
            </Nav.Link>
            <Nav.Link href="#Partners" className={navStyles["nav-links"]}>
              Workshop
            </Nav.Link>
            <Nav.Link href="#Company" className={navStyles["nav-links"]}>
              Tutorials
            </Nav.Link>
            <Nav.Link href="#Pricing" className={navStyles["nav-links"]}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
