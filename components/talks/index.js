import talkStyles from "./index.module.scss";

export default function TalkSection() {
  return (
    <>
      <section
        id="talks"
        className={[
          blogStyles["talks-intro"],
          blogStyles["pad-around-xlg"],
        ].join(" ")}
      >
        <div
          className="container"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <div className="row justify-content-end">
            <div className="col-md-7">
              <h1>Blogs.</h1>
            </div>
            <div className="col-md-5">
              <p>card</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
