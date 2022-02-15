import { useState } from "react";
import Link from 'next/link';

const Biography = () => {
  const [active, setActive] = useState("tab1");
  const activeCls = (name) => (active === name ? "active" : "");
  return (
    <section className="biography" id="biography">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Biography</h3>
          <p>
            {`I'm a Freelancer Front-end Developer with over 12 years of
                    experience. I'm from London, UK. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people are new experiences.`}
          </p>
        </div>
      </div>
      {/* /Main Title */}
      {/* Info Items */}
      <div className="fn_cs_info_items">
        <div className="container">
          <div className="row">
            <ul>
              <li className="wow fadeInUp" data-wow-delay="0s">
                <p>
                  Name: <span>Felicia Amor</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.15s">
                <p>
                  Birthday: <span>June 14, 1992</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.3s">
                <p>
                  Age: <span>29 Years</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.45s">
                <p>
                  Adress: <span>London, UK</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.6s">
                <p>
                  Phone:{" "}
                  <span>
                    <Link href="tel:+17785355344"><a>(+1) 7785 355 344</a></Link>
                  </span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.75s">
                <p>
                  Skype: <span>Felicia.A</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.9s">
                <p>
                  Email:{" "}
                  <span>
                    <Link href="mailto:felicia@domainname.com"><a>
                      felicia@domainname.com
                    </a></Link>
                  </span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="1.05s">
                <p>
                  Telegram: <span>Available</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Info Items */}
      {/* Download CV Button */}
      <div className="fn_cs_cv_btn">
        <div className="container">
          <span className="line top_hover" />
          <span className="line bottom_hover" />
          <span className="line top" />
          <span className="line bottom" />
          <Link href="img/cv.jpg"><a download>
            <span className="icon">
              <img src="svg/inbox.svg" alt="image" className="fn__svg" />
              <img src="svg/arrow.svg" alt="image" className="fn__svg arrow" />
            </span>
            <span>Download CV</span>
          </a></Link>
        </div>
      </div>
      {/* /Download CV Button */}
      {/* Tabs Shortcode */}
      <div className="fn_cs_tabs">
        <div className="container max880">
          <div className="row">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li
                  onClick={() => setActive("tab1")}
                  className={activeCls("tab1")}
                >
                  <Link href="#"><a>Experience</a></Link>
                </li>
                <li
                  onClick={() => setActive("tab2")}
                  className={activeCls("tab2")}
                >
                  <Link href="#"><a>Education</a></Link>
                </li>
                <li
                  onClick={() => setActive("tab3")}
                  className={activeCls("tab3")}
                >
                  <Link href="#"><a>Skills</a></Link>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeCls("tab1")}`}>
                {/* Boxed List */}
                <div className="fn_cs_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Frenify LLC</h5>
                          <span>( 2018 — Today )</span>
                        </div>
                        <h3>Sr. Front-end Engineer</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Google LLC</h5>
                          <span>( 2016 — 2018 )</span>
                        </div>
                        <h3>Front-end Developer</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Twitter LLC</h5>
                          <span>( 2016 — 2011 )</span>
                        </div>
                        <h3>Graphic Designer</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeCls("tab2")}`}>
                {/* Boxed List */}
                <div className="fn_cs_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Frenify University</h5>
                          <span>( 2014 — 2017 )</span>
                        </div>
                        <h3>Computer Science</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Edu University</h5>
                          <span>( 2011 — 2014 )</span>
                        </div>
                        <h3>Master Degree</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Clolumbia College</h5>
                          <span>( 2007 — 2011 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeCls("tab3")}`}>
                {/* Progress Bar */}
                <div className="fn_cs_progress_bar">
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Photoshop</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        92%
                      </span>
                      <div className="progress_bg" style={{ width: "92%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="progress_bg" style={{ width: "95%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">WordPress</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="progress_bg" style={{ width: "80%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Illustrator</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span>
                      <div className="progress_bg" style={{ width: "85%" }} />
                    </div>
                  </div>
                </div>
                {/* /Progress Bar */}
                {/* Description */}
                <div className="fn_cs_desc">
                  <p>
                    A freelance creative designer with a love for minimal
                    design, clean typography and well-written code, located in
                    San Francisco. Provide high quality and cost effective
                    offshore web and software development services. Wide range
                    of web and software development services across the world.
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
        </div>
      </div>
      {/* /Tabs Shortcode */}
    </section>
  );
};

export default Biography;
