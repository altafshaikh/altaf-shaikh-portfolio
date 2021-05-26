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
                href="https://www.youtube.com/watch?v=hsGOl_28R10"
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
                  Building Todo REST API Backend Using NodeJS, Express And
                  MongoDB
                </h2>
                <p className="mt-4">
                  Representational State Transfer (REST) is an architectural
                  pattern commonly used in developing modern web based
                  applications ranging from websites, mobile apps, games and
                  more. Developing a REST based API allows you to expose
                  functionality of your web service over HTTP and interact with
                  it over the web.
                </p>
                <p>
                  In this workshop we cover everything you need to know to get
                  started with, and build powerful REST APIs in NodeJS.
                </p>
              </a>
            </div>
          </div>
          {/* row 2 */}
          <div className="row mt-5">
            <div className="col-md-4">
              <p
                className={[
                  talkStyles["Card__type"],
                  talkStyles["font-cursive"],
                  talkStyles["h6"],
                ].join(" ")}
              >
                webinar
              </p>
            </div>
            <div className="col-md-8">
              <a
                href="https://www.youtube.com/watch?v=_RD8WFtfB3U"
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
                  Introduction To Open Source And Participate In Hacktoberfest
                </h2>
                <p className="mt-4">
                  Open Source remove barriers between innovators, and promotes a
                  free exchange of ideas within a community to drive creative,
                  scientific and technological advancement.
                </p>
                <p>
                  So in this webinar we will see, Introduction To Open Source
                  and How to participate and contribute into open source
                  projects.
                </p>
              </a>
            </div>
          </div>
          {/* row 3 */}
          <div className="row mt-5">
            <div className="col-md-4">
              <p
                className={[
                  talkStyles["Card__type"],
                  talkStyles["font-cursive"],
                  talkStyles["h6"],
                ].join(" ")}
              >
                mentoring
              </p>
            </div>
            <div className="col-md-8">
              <a
                href="https://www.youtube.com/watch?v=BxXB73iFcTE"
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
                  Web Development Best Practices for Beginners
                </h2>
                <p className="mt-4">
                  As a beiginners we make many mistakes while learning and also
                  we are not aware of fundamental things that we should take
                  into consideration while developing apllications
                </p>
                <p>
                  So in this training session we will see, Web Development Best
                  Practices and how to use GIT and GITHUB and importance of
                  Responsive design and how we can achieve responsiveness using
                  FLEX BOX.
                </p>
              </a>
            </div>
          </div>
          {/* row end */}
        </div>
      </section>
    </>
  );
}
