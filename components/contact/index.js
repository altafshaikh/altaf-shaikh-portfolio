import contactStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";

export default function ContactMe() {
  const { toggleDarkMode, theme } = useContext(themeContext);

  return (
    <>
      <section className={contactStyles["slide-out"]}>
        <section
          id="contact"
          className={[contactStyles["Contact"], ""].join(" ")}
        >
          <div
            className={[
              "container",
              contactStyles["contact-inner"],
              contactStyles["pad-around-xlg"],
            ].join(" ")}
          >
            <div className={["row"].join(" ")}>
              <div className="col-md-5 pt-5 pl-5">
                <p className={[contactStyles["h5"]].join(" ")}>
                  I’m always up for a chat.
                </p>
                <p className={[contactStyles["h5"]].join(" ")}>
                  Pop me an email at hi@cassie.codes or give me a shout on
                  social media.
                </p>
                <p className={[""].join(" ")}>
                  <a href="/">workshop</a>
                </p>
                <h2
                  className={[
                    contactStyles["Contact__heading"],
                    contactStyles["h1"],
                  ].join(" ")}
                >
                  Hey there!
                </h2>
              </div>
              <div className="col-md-7">
                <div className={contactStyles["contact-inner-bg"]}>
                  <img
                    className={contactStyles["contact-image"]}
                    src="/contact.png"
                    alt="contact illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
