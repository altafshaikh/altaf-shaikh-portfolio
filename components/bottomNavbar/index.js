import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import bottomNavStyles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BottomNavbar() {
  const navTheme = "text-white";
  return (
    <>
      <Navbar variant="dark" className={bottomNavStyles["bottom-nav"]}>
        <Nav className="">
          <Nav.Link href="#talks" className={`${navTheme}`}>
            <i
              className="fa fa-pencil fa-lg"
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
              className="fa fa-microphone fa-lg"
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
          <Nav.Link href="#tutorials" className={`${navTheme}`}>
            <i
              className="fa fa-book fa-lg"
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
              className="fa fa-info fa-lg"
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
