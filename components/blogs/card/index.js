import Link from "next/link";
import blogStyles from "../index.module.scss";
import { Button, Card } from "react-bootstrap";

export default function BlogCard({ blog }) {
  console.log(blog);
  return (
    <>
      <Card className={[blogStyles["card-browser"], ""].join(" ")}>
        <hr className={blogStyles["hr-line"]} />
        <Card.Body>
          <Card.Title
            className={["my-3", blogStyles["underline"]].join(" ")}
          >
            <p className={["", blogStyles["underline__text"]].join(" ")}>{blog.title}</p>
          </Card.Title>
          <Card.Text className="">
            {blog.description.substring(0, 165) + "..."}
          </Card.Text>
          <Card.Link href="#">{blog.source}</Card.Link>
          <Card.Link className="float-right" href={blog.url}>
            Read Post
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
