import blogStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";
import { Button, Card } from "react-bootstrap";
import Draggable from "react-draggable"; // The default
import BlogCard from "./card/index";

export default class BlogSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0,
      },
      controlledPosition: {
        x: -400,
        y: 200,
      },
    };
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };
  onDrop = (e) => {
    this.setState({ activeDrags: --this.state.activeDrags });
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  onDropAreaMouseEnter = (e) => {
    if (this.state.activeDrags) {
      e.target.classList.add("hovered");
    }
  };
  onDropAreaMouseLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    // console.log(this.props);
    const PostsIntro =
      this.props.theme.mode === "light"
        ? blogStyles["Posts-intro"]
        : blogStyles["Posts-intro-dark"];
    const hrLine =
      this.props.theme.mode === "light"
        ? blogStyles["hr-line"]
        : blogStyles["hr-line-dark"];
    const blogBtn =
      this.props.theme.mode === "light"
        ? blogStyles["blog-btn"]
        : blogStyles["blog-btn-dark"];
    const cardBrowser =
      this.props.theme.mode === "light"
        ? blogStyles["card-browser"]
        : blogStyles["card-browser-dark"];
    return (
      <>
        <section
          id="blogs"
          className={[PostsIntro, blogStyles["pad-around-xlg"]].join(" ")}
        >
          <div
            className="container"
            style={{ paddingLeft: "4%", paddingRight: "4%" }}
          >
            <div className={["row", blogStyles["row1"]].join(" ")}>
              <div className="col-lg-7">
                <h1 className={blogStyles["h1"]}>My Blogs.</h1>
              </div>
              <Draggable
                bounds={{ top: -150, left: -750, right: 150, bottom: 600 }}
                {...dragHandlers}
              >
                <div className={["col-lg-5", blogStyles["card1"]].join(" ")}>
                  <BlogCard
                    blog={this.props.blogData["0"]}
                    cardBrowser={cardBrowser}
                    hrLine={hrLine}
                  />
                </div>
              </Draggable>
            </div>
            <div className={["row", blogStyles["row2"]].join(" ")}>
              <Draggable
                bounds={{ top: -300, left: -100, right: 700, bottom: 300 }}
                {...dragHandlers}
              >
                <div className={blogStyles["card2"]}>
                  <BlogCard
                    blog={this.props.blogData["1"]}
                    cardBrowser={cardBrowser}
                    hrLine={hrLine}
                  />
                </div>
              </Draggable>
            </div>
            <div className={["row", blogStyles["row3"]].join(" ")}>
              <Draggable
                bounds={{ top: -500, left: -550, right: 400, bottom: 100 }}
                {...dragHandlers}
              >
                <div className="col-lg-6" className={blogStyles["card3"]}>
                  <BlogCard
                    blog={this.props.blogData["2"]}
                    cardBrowser={cardBrowser}
                    hrLine={hrLine}
                  />
                </div>
              </Draggable>
              <div className="col-lg-5 d-flex align-items-center justify-content-center">
                <a
                  role="button"
                  href="https://blog.teachmebro.com/"
                  className={["btn btn-light", blogBtn].join(" ")}
                >
                  Visit my blogs...
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
