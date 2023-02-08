import Link from "next/link";

const Service = () => {
  return (
    <section className="service" id="service">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Services</h3>
          <p>
            {`I help ambitious businesses like yours generate more profits
                    by building awareness, driving web traffic, connecting with
                    customers and growing overall sales. My only working rule is
                    that I don't work through agencies, I prefer to communicate
                    directly with clients.`}
          </p>
        </div>
      </div>
      {/* /Main Title */}
      {/* Boxed List */}
      <div className="fn_cs_boxed_list modern">
        <div className="container max1020">
          <ul>
            <li
              className="wow  fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="item">
                <div className="badge">
                  <p>Starts From</p>
                  <h5>$500</h5>
                </div>
                <h3>Web &amp; Product Design</h3>
                <p>
                  {`From low-fidelity wireframing and prototyping to a
                          final coded design. We don't just hand off static
                          designs, but enjoy working directly in the browser (♥
                          CSS) as much as with design tools such a`}{" "}
                  <Link className="fn__link" href="#">
                    Figma
                  </Link>
                  . We use can also setup complete sites in{" "}
                  <Link className="fn__link" href="#">
                    Statamic
                  </Link>{" "}
                  and{" "}
                  <Link className="fn__link" href="#">
                    Kirby
                  </Link>{" "}
                  and work alongside front-end developers to provide a complete
                  service.
                </p>
              </div>
            </li>
            <li
              className="wow  fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="item">
                <div className="badge">
                  <p>Starts From</p>
                  <h5>$450</h5>
                </div>
                <h3>Brand Identity</h3>
                <p>
                  From a single logomark to{" "}
                  <Link className="fn__link" href="#">
                    a full branding system
                  </Link>
                  . A brand new logo may not be the answer for you, we strongly
                  believe in refining and updating existing logos to increase
                  effectiveness without losing brand equity.
                </p>
              </div>
            </li>
            <li
              className="wow  fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="item">
                <div className="badge">
                  <p>Starts From</p>
                  <h5>$200</h5>
                </div>
                <h3>Iconography</h3>
                <p>
                  {`This is a speciality of ours, and we have worked with
                          Skype, Spotify and Dyson (to name just a few). The
                          process of reducing an idea to it's simplest, but
                          still recognisable form is joyous!`}
                </p>
              </div>
            </li>
            <li
              className="wow  fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <div className="item">
                <div className="badge">
                  <p>Starts From</p>
                  <h5>$150</h5>
                </div>
                <h3>Print</h3>
                <p>
                  We come from a traditional print publishing background,
                  starting in the last days of paste up artwork.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* /Boxed List */}
    </section>
  );
};

export default Service;
