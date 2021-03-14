import { Button, Col, Row } from "react-bootstrap";
import parse from "html-react-parser";

// scss
import bannerStyles from "./index.module.scss";
import HeroSvg from "./heroSvg";

import moskFont from "./bannerStyle.module.css";
import Typing from "../Typing";

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
          <div className="pt-5 w-72">
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
              I'm <Typing />
            </h1>
            <p
              className={[
                "w-75",
                bannerStyles["Hero__heading"],
                bannerStyles["h1"],
                moskFont["mosk-font"],
              ].join(" ")}
            >
              Also I ❤️ to share knowledge by{" "}
              <a
                href="#speaking"
                className={[bannerStyles["outline"]].join(" ")}
              >
                talking{" "}
              </a>
              &{" "}
              <a
                href="#writing"
                className={[bannerStyles["outline"]].join(" ")}
              >
                writing{" "}
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
