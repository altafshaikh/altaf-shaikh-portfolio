import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import bottomNavStyles from "./index.module.scss";

export default function BottomNavbar() {
  const navTheme = "";
  return (
    <>
      <Navbar variant="dark" className={bottomNavStyles["bottom-nav"]}>
        <Nav className="">
          <Link href="/">
            <a className={["nav-link", `${navTheme}`].join(" ")}>Home</a>
          </Link>
          <Nav.Link href="#Product" className={`${navTheme}`}>
            Blogs
          </Nav.Link>
          <Nav.Link href="#Education" className={`${navTheme}`}>
            Talks
          </Nav.Link>
          <Nav.Link href="#Partners" className={`${navTheme}`}>
            Workshop
          </Nav.Link>
          <Nav.Link href="#Company" className={`${navTheme}`}>
            Tutorials
          </Nav.Link>
          <Nav.Link href="#Pricing" className={`${navTheme}`}>
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
