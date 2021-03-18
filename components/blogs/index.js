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
    return (
      <>
        <section
          id="blogs"
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
                <h1 className={blogStyles["h1"]}>Blogs.</h1>
              </div>
              <Draggable
                bounds={{ top: -150, left: -750, right: 150, bottom: 600 }}
                {...dragHandlers}
              >
                <div className="col-md-5">
                  <BlogCard blog={this.props.blogData[0]} />
                </div>
              </Draggable>
            </div>
            <div className="row justify-content-start">
              <Draggable
                bounds={{ top: -300, left: -190, right: 700, bottom: 300 }}
                {...dragHandlers}
              >
                <BlogCard blog={this.props.blogData[1]} />
              </Draggable>
            </div>
            <div className="row flex-row-reverse justify-content-around mt-3">
              <Draggable
                bounds={{ top: -500, left: -550, right: 400, bottom: 100 }}
                {...dragHandlers}
              >
                <div className="col-md-7">
                  <BlogCard blog={this.props.blogData[2]} />
                </div>
              </Draggable>
              <div className="col-md-5 d-flex align-items-center justify-content-center">
                <Button
                  className={["btn btn-light", blogStyles["blog-btn"]].join(
                    " "
                  )}
                >
                  Visit my blogs..
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

// export default function BlogSection() {
//   const { toggleDarkMode, theme } = useContext(themeContext);

//   return (
// <>
//   <section
//     id="writing"
//     className={[
//       blogStyles["Posts-intro"],
//       blogStyles["pad-around-xlg"],
//     ].join(" ")}
//   >
//     <div
//       className="container"
//       style={{ paddingLeft: "10%", paddingRight: "10%" }}
//     >
//       <div className="row justify-content-end">
//         <div className="col-md-7">
//           <h1>Blogs.</h1>
//         </div>
//         <div className="col-md-5">
//           <Card
//             style={{ width: "26rem" }}
//             className={[blogStyles["card-browser"], ""].join(" ")}
//           >
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">
//                 Card Subtitle
//               </Card.Subtitle>
//               <Card.Text>
//                 Some quick example text to build on the card title and make
//                 up the bulk of the card's content.
//               </Card.Text>
//               <Card.Link href="#">Card Link</Card.Link>
//               <Card.Link href="#">Another Link</Card.Link>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//       <div className="row justify-content-start">
//         <Card style={{ width: "18rem" }}>
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//               Card Subtitle
//             </Card.Subtitle>
//             <Card.Text>
//               Some quick example text to build on the card title and make up
//               the bulk of the card's content.
//             </Card.Text>
//             <Card.Link href="#">Card Link</Card.Link>
//             <Card.Link href="#">Another Link</Card.Link>
//           </Card.Body>
//         </Card>
//       </div>
//       <div className="row flex-row-reverse justify-content-around">
//         <div className="col-md-7">
//           <Card style={{ width: "18rem" }}>
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">
//                 Card Subtitle
//               </Card.Subtitle>
//               <Card.Text>
//                 Some quick example text to build on the card title and make
//                 up the bulk of the card's content.
//               </Card.Text>
//               <Card.Link href="#">Card Link</Card.Link>
//               <Card.Link href="#">Another Link</Card.Link>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-5 d-flex align-items-center justify-content-center">
//           <Button
//             className={["btn btn-light", blogStyles["blog-btn"]].join(" ")}
//           >
//             Visit my blogs..
//           </Button>
//         </div>
//       </div>
//     </div>
//   </section>
// </>
//   );
// }
