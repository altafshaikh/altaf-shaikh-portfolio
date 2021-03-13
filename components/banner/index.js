import { Button, Col, Row } from "react-bootstrap";
import parse from "html-react-parser";

// scss
import bannerStyles from "./index.module.scss";
import HeroSvg from "./heroSvg";

import moskFont from "./bannerStyle.module.css";

export default function Banner({ heroContent }) {
  return (
    <div className="" style={{ height: "90vh" }}>
      <Row>
        <Col md={6}>
          <div className={bannerStyles["wrapper"]}>
            <HeroSvg />
          </div>
        </Col>
        <Col md={6}>
          <div className="pt-5 w-75">
            <p
              className={[
                bannerStyles["Hero__eyebrow"],
                bannerStyles["font-cursive"],
                bannerStyles["h5"],
              ].join(" ")}
            >
              👋 <span>{heroContent.heroEyebrow}</span>
            </p>
            <h1
              className={[
                bannerStyles["Hero__heading"],
                bannerStyles["h1"],
                moskFont["mosk-font"],
              ].join(" ")}
            >
              I like making{" "}
              <a href="#" className={[bannerStyles["outline"]].join(" ")}>
                fun
              </a>
              , <span className="js-interactive">interactive</span> things with
              code. I also{" "}
              <a
                href="#speaking"
                className={[bannerStyles["outline"]].join(" ")}
              >
                talk{" "}
              </a>
              &{" "}
              <a
                href="#writing"
                className={[bannerStyles["outline"]].join(" ")}
              >
                write{" "}
              </a>
              about those things.
            </h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}
