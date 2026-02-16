import React from "react";
import Scene from "../src/components/Scene";
import Link from "next/link";

export default function About() {
  return (
    <section className="about" id="about">
      {/* About Modern Shortcode */}
      <div className="fn_cs_about_modern">
        <div className="container">
          <div className="row">
            <div className="left_part">
              <Scene />
            </div>
            <div className="right_part">
              {/* Main Title */}
              <div className="main_title">
                <h3>Ford Henley</h3>
                <p>
                  Professional Full Stack Developer and Digital Marketer located
                  in Melbourne, FL. I enjoy rugby, reading and spending time with
                  family. I am a self motivated and lifetime learner looking to
                  make an impact in your business.
                </p>
                <div className="fn_cs_info_items">
                  <ul>
                    <li className="wow">
                    <Link href="/biography">
                      About
                    </Link>
                    </li>
                    <li className="wow">
                    <Link href="/portfolio">
                      Portfolio
                    </Link>
                    </li>
                    <li className="wow">
                    <Link href="/bootcamp-projects">
                      Bootcamp Projects
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Main Title */}
            </div>
          </div>
        </div>
      </div>
      {/* About Modern Shortcode */}
    </section>
  );
}
