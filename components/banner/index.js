import { Button } from "react-bootstrap";

// scss
import bannerStyles from "./index.module.scss";

export default function Banner({ heroContent }) {
  return (
    <div style={{ height: "100vh" }} className="d-flex align-items-center">
      <div className="container text-white d-flex justify-content-center">
        <div className="text-center col-sm-12">
          <h1 className={bannerStyles["hero-heading"]}>
            {heroContent.heading}
          </h1>
          <p className={bannerStyles["hero-content"]}>{heroContent.content}</p>
          <Button
            className={["px-5 my-5", bannerStyles["try-btn"]].join(" ")}
            variant="primary"
          >
            Try For Free
          </Button>
          <p className={bannerStyles["request-text"]}>
            <a href="#">Request A Demo</a>
          </p>
        </div>
      </div>
    </div>
  );
}
