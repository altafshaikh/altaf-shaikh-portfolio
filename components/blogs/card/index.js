import Link from "next/link";
import blogStyles from "../index.module.scss";
import { Button, Card } from "react-bootstrap";

export default function BlogCard({ blog }) {
  console.log(blog);
  return (
    <>
      <Card
        style={{ width: "28rem" }}
        className={[blogStyles["card-browser"], ""].join(" ")}
      >
        <hr className={blogStyles["hr-line"]} />
        <Card.Body>
          <Card.Title className="my-3">{blog.title}</Card.Title>
          <Card.Text className="text-muted">{blog.description}</Card.Text>
          <Card.Link href="#">{blog.source}</Card.Link>
          <Card.Link className="float-right" href={blog.url}>
            Read Post
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
