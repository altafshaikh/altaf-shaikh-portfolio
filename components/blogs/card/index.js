import Link from "next/link";
import blogStyles from "../index.module.scss";
import { Button, Card } from "react-bootstrap";

export default function BlogCard({ blog, cardBrowser, hrLine }) {
  return (
    <>
      <Card className={[cardBrowser, ""].join(" ")}>
        <hr className={hrLine} />
        <Card.Body>
          <Card.Title className={["my-3", blogStyles["underline"]].join(" ")}>
            <span
              className={[blogStyles["h5"], blogStyles["underline__text"]].join(
                " "
              )}
            >
              {blog.title}
            </span>
          </Card.Title>
          <Card.Text className="">
            {blog.description.substring(0, 165) + "..."}
          </Card.Text>
          <Card.Link href="#blogs">{blog.source}</Card.Link>
          <Card.Link className="float-right" href={blog.url}>
            Read Post
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
