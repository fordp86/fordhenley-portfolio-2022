"use client";

import React from "react";
import { useEffect } from "react";
import { isotopLayout } from "../utils";
import Link from "next/link";

export default function SideProjects() {
  useEffect(() => {
    isotopLayout();
  }, []);
  return (
    <div className="portfolio_list">
      <div className="container">
        <ul className="fn__masonry gallery_zoom">
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://chrishughes.com"
                  >
                    Chris Hughes Blog
                  </a>
                </h3>
                <p>Custom WordPress Theme, Bootstrap 4</p>
              </div>
              <div className="img_holder">
                <div target="_blank" className="zoom" href="#">
                  <img
                    className="h-100"
                    src="img/portfolio/chrishughes-port.jpeg"
                    alt="Chris Hughes Blog"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/chrishughes-port.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://chrishughes.com"
                  >
                    View Project
                  </a>
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <a className="fn__link zoom" href="#">
                    Lauryn Henley Freedom Coach
                  </a>
                </h3>
                <p>WordPress Theme, Front End Dev, WP Elementor</p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/laurynhenleyport.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/laurynhenleyport.jpeg"
                    alt="Lauryn Henley Freedom Coach"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/laurynhenleyport.jpeg"
                />
              </div>
              <div className="project_link">
                
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <a className="fn__link zoom" target="_blank" href="#">
                    Destin Music
                  </a>
                </h3>
                <p>Custom Drupal 7 Theme, Bootstrap 4</p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/destinmusichiphop-port.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/destinmusichiphop-port.jpeg"
                    alt="Destin Music"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/destinmusichiphop-port.jpeg"
                />
              </div>
              <div className="project_link">
                
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <a
                    target="_blank"
                    className="fn__link zoom"
                    href="https://allsportsassociation.com"
                  >
                    Emerald Coast All Sports Association
                  </a>
                </h3>
                <p>Custom WordPress Theme, Bootstrap 5</p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/asa-port-img-1.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/asa-port-img-1.jpeg"
                    alt="Emerald Coast All Sports Association"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/asa-port-img-1.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    target="_blank"
                    className="fn__link zoom"
                    href="https://allsportsassociation.com"
                  >
                    View Project
                  </a>
              </div>
            </div>
          </li>

          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <Link className="fn__link zoom" href="#">
                    2 Tall Women
                  </Link>
                </h3>
                <p>WordPress Elementor Theme Customization</p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/2-tall-port-img-1-1.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/2-tall-port-img-1-1.jpeg"
                    alt="2 Tall Women"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/2-tall-port-img-1-1.jpeg"
                />
              </div>
              <div className="project_link">
                
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://www.randallsadventure.com/"
                  >
                    Randall’s Adventure
                  </a>
                </h3>
                <p>Drupal 7, Drupal Commerce</p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/randallsadventure.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/randallsadventure.jpeg"
                    alt="Randall’s Adventure"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/randallsadventure.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://www.randallsadventure.com/"
                  >
                    View Project
                  </a>
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <a
                    className="fn__link zoom"
                    target="_blank"
                    href="http://echols.territory3dev.com/"
                  >
                    Echols Metal Roofing
                  </a>
                </h3>
                <p>Custom WordPress Theme, Bootstrap 5</p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/echols-thumbnail.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/echols-thumbnail.jpeg"
                    alt="Echols Metal Roofing"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/echols-thumbnail.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="http://echols.territory3dev.com/"
                  >
                    View Project
                  </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
