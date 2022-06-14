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
            {`I'm a Full Stack Developer & Digital Marketer with over 10 years of
                    experience. I'm from Fort Walton Beach, FL and currently reside in Austin,TX. 
                    I code and create websites for amazing people around the world. I like to learn new skills and take challenges headon.`}
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
                  Name: <span>Ford Henley</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.3s">
                <p>
                  Age: <span>35 Years</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.45s">
                <p>
                  Address: <span>Austin, Texas</span>
                </p>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.9s">
                <p>
                  Email:{" "}
                  <span>
                    <Link href="mailto:fordp86@gmail.com"><a>
                      fordp86@gmail.com
                    </a></Link>
                  </span>
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
          <Link href="download/PatrickFordHenley_Resume_2022.pdf" target="_blank"><a download>
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
                          <h5>Sport Clips - Franchise</h5>
                          <span>( 2015 — Today )</span>
                        </div>
                        <h3>Director of Business Development</h3>
                        <ul>
                          <li>- Lead business development activities, research current and future target markets.</li>
                          <li>- Work with Team Leader to manage marketing projects and improve business
                            efficiency through using automations and technology.</li>
                          <li>- Headed creation of support ticket systems to manage multistore issues and standardize monthly store success checks for quality assurance.</li>
                          <li>- Increased Destin location sales by 10% with strategic marketing partnerships to drive more traffic to the tourist-heavy economy via online advertising & social media.</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Ford's Web Help</h5>
                          <span>( 2017 — 2022)</span>
                        </div>
                        <h3>President</h3>
                        <ul>
                          <li>- Provide clients with custom designed solutions to drive revenue, create consistent branding, and streamline workflows.</li>
                          <li>- Gather requirements for digital marketing initiatives and plan project scope. • Design, launch, test, and deliver websites, while providing key updates to
  stakeholders and clients along with optimizing for searching engines.</li>
                          <li>- Manage all small business operations, including marketing, contract negotiations, and finances.</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>The Shops at Wright Plaza</h5>
                          <span>( 2015 — 2018 )</span>
                        </div>
                        <h3>Marketing Director</h3>
                        <ul>
                          <li>- Worked collaboratively with the rental unit manager to incorporate modern technology and develop a competitive web presence in all tenant stores.</li>
                          <li>- Developed New Brand Identity: created a new logo and website for the Shops at Wright Plaza.</li>
                          <li>- Coordinated digital displays with new tenant promotional information for monthly advertising on billboards and store reader-boards.</li>
                        </ul>
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
                          <h5>Bethel Tech</h5>
                          <span>( Fall 2022 )</span>
                        </div>
                        <h3>Full Stack Web Development</h3>
                        <p>
                          I have and will learn JavaScript, TypeScript, React,
                          MySql, React Native and more.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Udacity Nano Degree</h5>
                          <span>( 2018)</span>
                        </div>
                        <h3>Front End Web Development</h3>
                        <p>
                         I learned HTML, CSS, JavaScript and Python
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Full Sail University</h5>
                          <span>( 2014 )</span>
                        </div>
                        <h3>Masters Certificate - Digital Marketing</h3>
                        <p>
                          I learned how to create and manage digital marketing campaigns.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>The University of Alabama</h5>
                          <span>( 2005-2009 )</span>
                        </div>
                        <h3>Bachelors - Marketing</h3>
                        <p>
                          I completed my major requirements with a 4.0.
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
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Photoshop</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        5 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        11 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">WordPress</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        10 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">Affinity Photo</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        5 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">PHP</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        5 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">JavaScript</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        2 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">TypeScript</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        1 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">React</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        1 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="progress_item open" data-value={100}>
                    <div className="item_in">
                      <h3 className="progress_title">MySql</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        1 years
                      </span>
                      <div className="progress_bg" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
                {/* /Progress Bar */}
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
