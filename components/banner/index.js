import { Button, Col, Row } from "react-bootstrap";
import parse from "html-react-parser";

// scss
import bannerStyles from "./index.module.scss";
import HeroSvg from "./heroSvg";

export default function Banner({ heroContent }) {
  return (
    <div className="" style={{ height: "100vh" }}>
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
              ].join(" ")}
            >
              👋 <span>{heroContent.heroEyebrow}</span>
            </p>
            <h1
              className={[
                bannerStyles["Hero__heading"],
                bannerStyles["h1"],
              ].join(" ")}
            >
              {parse(heroContent.heroHeading)}
            </h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}
