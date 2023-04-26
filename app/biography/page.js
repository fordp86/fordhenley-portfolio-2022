"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Biography() {
  const [active, setActive] = useState("tab1");
  const activeCls = (name) => (active === name ? "active" : "");
  return (
    <section className="biography" id="biography">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Biography</h3>
          <p>
            {`I'm a Full Stack Developer and currently reside in Austin,TX. I code and create websites for amazing people around the world. I like to learn new skills and take challenges head on.`}
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
              <li className="wow fadeInUp" data-wow-delay="0.9s">
                <p>
                  Email:{" "}
                  <span>
                    <Link href="mailto:fordp86@gmail.com">
                      fordp86<span>@</span>gmail.com
                    </Link>
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
          <Link href="download/FordHenleyResume_2023.pdf" target="_blank">
            <span className="icon">
              <img src="svg/inbox.svg" alt="image" className="fn__svg" />
              <img src="svg/arrow.svg" alt="image" className="fn__svg arrow" />
            </span>
            <span>Download Resume</span>
          </Link>
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
                  <Link href="#tab1">Experience</Link>
                </li>
                <li
                  onClick={() => setActive("tab2")}
                  className={activeCls("tab2")}
                >
                  <Link href="#tab2">Education</Link>
                </li>
                <li
                  onClick={() => setActive("tab3")}
                  className={activeCls("tab3")}
                >
                  <Link href="#tab3">Skills</Link>
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
                        <h3>Digital Strategist</h3>
                        <ul>
                          <li>
                            - Lead business development activities, and research
                            current/future target markets across 3 stores.
                          </li>
                          <li>
                            - Guide Team Leader in managing marketing projects
                            and improving business efficiency through updated
                            automations and technology.
                          </li>
                          <li>
                            - Manage processes for each store manager with over
                            30 employees.
                          </li>
                          <li>
                            - Develop strategies to boost store performance to
                            generate $1 million in revenue across our 3
                            locations.
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Ford's Web Help</h5>
                          <span>( 2010 — Present)</span>
                        </div>
                        <h3>President</h3>
                        <ul>
                          <li>
                            - Partner with 20 small business clients to boost
                            their online presence with web development & digital
                            marketing.
                          </li>
                          <li>
                            - Gather requirements for digital marketing
                            initiatives and plan project scope.
                          </li>
                          <li>
                            - Design, launch, test, and deliver websites, while
                            providing key updates to stakeholders and clients
                            along with optimizing for searching engines.
                          </li>
                          <li>
                            - Direct outside vendors on project deliverables.
                          </li>
                          <li>
                            - Manage all small business operations, including
                            marketing, contract negotiations, and finances.
                          </li>
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
                          <li>
                            - Developed New Brand Identity: created a new logo
                            and website for the Shops at Wright Plaza.
                          </li>
                          <li>
                            - Designed digital displays with new tenant
                            promotional information for monthly advertising on
                            billboards and store reader-boards.
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Student Life</h5>
                          <span>( 2012 — 2014 )</span>
                        </div>
                        <h3>Front-End Web Developer</h3>
                        <ul>
                          <li>
                            - Collaborated with creative teams and project
                            managers to implement new marketing campaigns with
                            front end development.
                          </li>
                          <li>
                            - Converted all company websites to Twitter
                            Bootstrap-based mobile-friendly sites to boost sales
                            and traffic.
                          </li>
                          <li>
                            - Reduced monthly email marketing costs by 50% and
                            increased efficiencies by migrating services from
                            Constant Contact to Mailchimp.
                          </li>
                          <li>
                            - Worked alongside the lead developer to create
                            custom landing pages and content for company
                            programs such as their Student Life Conference and
                            Summer Camps.
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>ProctorU</h5>
                          <span>( 2011 — 2012 )</span>
                        </div>
                        <h3>Internet Media Associate</h3>
                        <ul>
                          <li>
                            - Promoted to Lead Tech Support Proctor within first
                            2 months and Internet Media Associate after 5
                            months.
                          </li>
                          <li>
                            - Worked with CTO & CEO to develop initial internet
                            marketing strategy as the 1st member of the web
                            team.
                          </li>
                          <li>
                            - Optimized proctoru.com to overtake existing
                            competitors for the number one on Google for the
                            highly competitive keywords: Online Proctoring &
                            Virtual Proctoring.
                          </li>
                          <li>
                            - Partnered with the University of Illinois
                            Accessibility program to make all client facing web
                            applications 508 ADA compliant.
                          </li>
                          <li>
                            - Developed a custom lead generation funnel to
                            navigate customers between the sales team and the
                            support team.
                          </li>
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
                          JavaScript, TypeScript, React, MySql, React Native and
                          more.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Coder Foundry</h5>
                          <span>( Fall 2022 )</span>
                        </div>
                        <h3>.Net Web Development</h3>
                        <p>JavaScript, .Net, MySql, and more.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Udacity Nano Degree</h5>
                          <span>( 2018)</span>
                        </div>
                        <h3>Front End Web Development</h3>
                        <p>I learned HTML, CSS, JavaScript and Python</p>
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
                          I learned how to create and manage digital marketing
                          campaigns.
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
                        <p>I completed my major requirements with a 4.0.</p>
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
}
