import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import bottomNavStyles from "./index.module.scss";
import { themeContext } from "../../pages/_app";
import React, { useContext } from "react";

export default function BottomNavbar() {
  const { toggleDarkMode, theme } = useContext(themeContext);
  const navTheme = "";
  const bottomNav =
    theme.mode === "light"
      ? bottomNavStyles["bottom-nav"]
      : bottomNavStyles["bottom-nav-dark"];

  return (
    <>
      <Navbar variant="" className={bottomNav}>
        <Nav className="">
          <Nav.Link href="#blogs" className={`${navTheme}`}>
            <i
              className="fa fa-pencil"
              aria-hidden="true"
              style={{
                display: "block",
                paddingLeft: "8px",
                paddingBottom: "5px",
              }}
            >
              {" "}
            </i>
            Blogs
          </Nav.Link>
          <Nav.Link href="#talks" className={`${navTheme}`}>
            <i
              className="fa fa-microphone"
              aria-hidden="true"
              style={{
                display: "block",
                paddingLeft: "8px",
                paddingBottom: "5px",
              }}
            >
              {" "}
            </i>
            Talks
          </Nav.Link>
          <Nav.Link
            href="https://tutorial.teachmebro.com"
            className={`${navTheme}`}
          >
            <i
              className="fa fa-book"
              aria-hidden="true"
              style={{
                display: "block",
                paddingLeft: "16px",
                paddingBottom: "5px",
              }}
            >
              {" "}
            </i>
            Tutorials
          </Nav.Link>
          <Nav.Link href="#about" className={`${navTheme}`}>
            <i
              className="fa fa-info"
              aria-hidden="true"
              style={{
                display: "block",
                paddingLeft: "14px",
                paddingBottom: "5px",
              }}
            >
              {" "}
            </i>
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
