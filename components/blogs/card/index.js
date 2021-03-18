import Link from "next/link";
import blogStyles from "../index.module.scss";
import { Button, Card } from "react-bootstrap";

export default function BlogCard({ blog }) {
  return (
    <>
      <Card
        style={{ width: "28rem" }}
        className={[blogStyles["card-browser"], ""].join(" ")}
      >
        <hr className={blogStyles["hr-line"]} />
        <Card.Body>
          <Card.Title className="my-3">Card Title</Card.Title>
          <Card.Text className="text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link className="float-right" href="#">
            Another Link
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
