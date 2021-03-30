import contactStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";

export default function ContactMe() {
  const { toggleDarkMode, theme } = useContext(themeContext);

  return (
    <>
      <section>
        <section id="contact" className={[""].join(" ")}>
          <div
            className="container"
            style={{ paddingLeft: "4%", paddingRight: "4%" }}
          >
            <div className="row mt-5">
              <div className="col-md-4">
                <p className={[""].join(" ")}>I’m always up for a chat.</p>
                <p className={[""].join(" ")}>
                  Pop me an email at hi@cassie.codes or give me a shout on
                  social media.
                </p>
                <p className={[""].join(" ")}>workshop</p>
              </div>
              <div className="col-md-8">
                <img src="/contact.png" alt="contact illustration" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
