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
          <Link href="#blog">
            <a className={["nav-link", `${navTheme}`].join(" ")}>Blogs</a>
          </Link>
          <Nav.Link href="#talks" className={`${navTheme}`}>
            Talks
          </Nav.Link>
          <Nav.Link href="#tutorials" className={`${navTheme}`}>
            Tutorials
          </Nav.Link>
          <Nav.Link href="#about" className={`${navTheme}`}>
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
