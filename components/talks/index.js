import talkStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";

export default function TalkSection() {
  const { toggleDarkMode, theme } = useContext(themeContext);

  const TalksIntro =
    theme.mode === "light"
      ? talkStyles["talks-intro"]
      : talkStyles["talks-intro-dark"];

  const SpeakerImage =
    theme.mode === "light"
      ? talkStyles["Speaking__image"]
      : talkStyles["Speaking__image__dark"];

  const CardLink =
    theme.mode === "light"
      ? talkStyles["Card__link"]
      : talkStyles["Card__link__dark"];

  return (
    <>
      <section
        id="talks"
        className={[TalksIntro, talkStyles["pad-around-xlg"]].join(" ")}
      >
        <div
          className="container"
          style={{ paddingLeft: "4%", paddingRight: "4%" }}
        >
          <div className="row justify-content-end">
            <div className="col-md-7">
              <div className={[talkStyles["Speaking__text"]].join(" ")}>
                <h1 className={talkStyles["h1"]}>My Talks.</h1>
                <p className="mt-3">
                  My First self-hosted Workshop I conducted in my college
                  campus, with an aim to share my knowledge.
                </p>
                <p>
                  So I like to host sessions, but not naturally. Since then I’d
                  deliver talks and conducted workshops on various topics and
                  cross domains. It still terrifies me.
                </p>

                <a className={talkStyles["talk-link"]} href="#">
                  Check out my videos and upcoming talks.
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <figure className={[SpeakerImage].join(" ")}>
                <img
                  src="https://github.com/altafshaikh/static-file-storage/raw/master/Portfolio/images/altaf_workshop-min.jpg"
                  alt="black and white photo of Altaf Shaikh on stage at SJCEM. Hosting Django Workshop"
                />
                <figcaption
                  className={[talkStyles["small"]].join(" ")}
                  data-content="Django Workshop"
                >
                  Django Workshop
                </figcaption>
              </figure>
            </div>
          </div>
          {/* talks lists */}
          <div className="row mt-5">
            <div className="col-md-4">
              <p
                className={[
                  talkStyles["Card__type"],
                  talkStyles["font-cursive"],
                  talkStyles["h6"],
                ].join(" ")}
              >
                workshop
              </p>
            </div>
            <div className="col-md-8">
              <a
                href="/speaking/getting-started-with-svg-animation"
                className={[
                  CardLink,
                  talkStyles["underline"],
                  talkStyles["sf-flow"],
                ].join(" ")}
              >
                <h2
                  className={[
                    talkStyles["underline__text"],
                    talkStyles["h4"],
                  ].join(" ")}
                >
                  Getting started with SVG animation
                </h2>
                <p className="mt-4">
                  Animation is one of the best ways to bring brand personality
                  and character to an online experience, but in the busy world
                  of front-end development, it can often be overlooked.
                </p>
                <p>
                  In this workshop we cover everything you need to know to get
                  started with, and master SVG animation.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
