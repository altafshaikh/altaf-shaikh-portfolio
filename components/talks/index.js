import talkStyles from "./index.module.scss";

export default function TalkSection() {
  return (
    <>
      <section
        id="talks"
        className={[
          talkStyles["talks-intro"],
          talkStyles["pad-around-xlg"],
        ].join(" ")}
      >
        <div
          className="container"
          style={{ paddingLeft: "4%", paddingRight: "4%" }}
        >
          <div className="row justify-content-end">
            <div className="col-md-7">
              <div className={[talkStyles["Speaking__text"]].join(" ")}>
                <h1 className={talkStyles["h1"]}>My Talks.</h1>
                <p className="mt-5">
                  The first time I got asked to speak at a conference, my gut
                  reaction was “heck no. That sounds terrifying”.
                </p>

                <p>
                  So naturally I said yes. Since then I’ve spoken at conferences
                  and meet-ups all over the world. It still terrifies me.
                </p>

                <a href="#">Check out my videos and upcoming talks.</a>
              </div>
            </div>
            <div className="col-md-5">
              <figure className={[talkStyles["Speaking__image"]].join(" ")}>
                <img
                  src="https://github.com/altafshaikh/static-file-storage/raw/master/Portfolio/images/altaf_workshop-min.jpg"
                  alt="black and white photo of Altaf on stage at SJCEM. Hosting Django Workshop"
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
        </div>
      </section>
    </>
  );
}
