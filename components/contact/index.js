import contactStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";

export default function ContactMe() {
  const { toggleDarkMode, theme } = useContext(themeContext);
  const contact =
    theme.mode === "light"
      ? contactStyles["Contact"]
      : contactStyles["Contact-dark"];
  const contactInner =
    theme.mode === "light"
      ? contactStyles["contact-inner"]
      : contactStyles["contact-inner-dark"];
  const link =
    theme.mode === "light" ? contactStyles["link"] : contactStyles["link-dark"];
  return (
    <>
      <section className={contactStyles["slide-out"]}>
        <section id="contact" className={[contact, ""].join(" ")}>
          <div
            className={[
              "container",
              contactInner,
              contactStyles["pad-around-xlg"],
            ].join(" ")}
          >
            <div className={["row"].join(" ")}>
              <div
                className={[
                  "col-md-5 pt-5",
                  contactStyles["contact-text"],
                ].join(" ")}
              >
                <p className={[contactStyles["h5"]].join(" ")}>
                  I’m always up for a chat.
                </p>
                <p className={[contactStyles["h5"]].join(" ")}>
                  <a href="hello@altafshaikh.ml" className={link}>
                    Pop me an email
                  </a>{" "}
                  at hello@altafshaikh.ml or give me a shout on social media.
                </p>
                <span>
                  <i
                    className="fa fa-instagram fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-youtube fa-lg p-2" aria-hidden="true"></i>
                  <i className="fa fa-github fa-lg p-2" aria-hidden="true"></i>
                  <i
                    className="fa fa-linkedin fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-twitter fa-lg p-2" aria-hidden="true"></i>
                </span>
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
