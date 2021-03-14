// React version: "^16.12.0"
import React from "react";
// Import the desired words
class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        "<span class='outline'>a Web Developer</span>",
        "<span class='outline'>a YouTuber</span>",
        "<span class='outline'>an Educator</span>",
        "<span class='outline'>a Freelancer</span>",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      smartBackspace: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Typing;
