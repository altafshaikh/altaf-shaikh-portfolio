import blogStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";
import { Card } from "react-bootstrap";

export default function BlogSection() {
  const { toggleDarkMode, theme } = useContext(themeContext);

  return (
    <>
      <section
        id="writing"
        className={[
          blogStyles["Posts-intro"],
          blogStyles["pad-around-xlg"],
        ].join(" ")}
      >
        <div
          className="container"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <div className="row justify-content-end">
            <div className="col-md-7">
              <h1>Blogs.</h1>
            </div>
            <div className="col-md-5">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row justify-content-start">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="row flex-row-reverse justify-content-around">
            <div className="col-md-7">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <h1>Blogs.</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
