import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";
import BottomNavbar from "../bottomNavbar";

export default function topNavbar({ logo }) {
  const { toggleDarkMode, theme } = useContext(themeContext);

  const navTheme =
    theme.mode === "light"
      ? navStyles["nav-links"]
      : navStyles["nav-links-dark"];
  const nameColor =
    theme.mode === "light" ? navStyles["name"] : navStyles["name-dark"];
  const surnameColor =
    theme.mode === "light" ? navStyles["surname"] : navStyles["surname-dark"];
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="light" className="pt-3">
        <Navbar.Brand href="#altaf">
          <h1 className={nameColor}>
            Altaf<span className={surnameColor}>.Shaikh</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="text-center mr-5"
        >
          <Nav
            className={["ml-auto", navStyles["nav-item-container"]].join(" ")}
          >
            <Link href="/">
              <a className={["nav-link", `${navTheme}`].join(" ")}>Home</a>
            </Link>
            <Nav.Link href="#blogs" className={`${navTheme}`}>
              Blogs
            </Nav.Link>
            <Nav.Link href="#talks" className={`${navTheme}`}>
              Talks
            </Nav.Link>
            <Nav.Link href="#workshop" className={`${navTheme}`}>
              Workshop
            </Nav.Link>
            <Nav.Link href="#tutorials" className={`${navTheme}`}>
              Tutorials
            </Nav.Link>
            <Nav.Link href="#about" className={`${navTheme}`}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <BottomNavbar />
    </>
  );
}
