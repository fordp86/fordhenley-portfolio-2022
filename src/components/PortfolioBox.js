"use client";

import React from "react";
import { useEffect } from "react";
import { isotopLayout } from "../utils";
import Link from "next/link";

export default function PortfolioBox() {
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
                  <Link
                    className="fn__link zoom"
                    target="_blank"
                    href="https://sunsetpdi.com"
                  >
                    Sunset Pointe Development
                  </Link>
                </h3>
                <p>WordPress</p>
              </div>
              <div className="img_holder">
                <Link className="zoom" href="https://sunsetpdi.com">
                  <img
                    className="h-100"
                    src="img/portfolio/sunsetpdi-thumb.jpeg"
                    alt="Sunset PDI Website"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/sunsetpdi-thumb.jpeg"
                />
              </div>
            </div>
          </li>

          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <Link
                    className="fn__link zoom"
                    target="_blank"
                    href="https://fortwaltonbeachhealthinsurance.com/"
                  >
                    Cornerstone Medicare
                  </Link>
                </h3>
                <p>Custom WordPress Theme, Bootstrap 4</p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/cornertstone-port-img-1.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/cornertstone-port-img-1.jpeg"
                    alt="Cornerstone Medicare"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/cornertstone-port-img-1.jpeg"
                />
              </div>
            </div>
          </li>

          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <Link
                    className="fn__link zoom"
                    target="_blank"
                    href="https://bracesbysb.com/"
                  >
                    Sherman & Briscoe Orthodontics
                  </Link>
                </h3>
                <p>Custom WordPress Bootstrap Theme, Custom SEO Campaign</p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/bracesbysb-port.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/bracesbysb-port.jpeg"
                    alt="Sherman & Briscoe Orthodontics"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/bracesbysb-port.jpeg"
                />
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <Link
                    className="fn__link zoom"
                    target="_blank"
                    href="https://www.46logistics.com/"
                  >
                    46 Logistics
                  </Link>
                </h3>
                <p>Custom SEO Campaign</p>
              </div>
              <div className="img_holder">
                <Link className="zoom" href="img/portfolio/46logistics.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/46logistics.jpeg"
                    alt="46 Logistics"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/46logistics.jpeg"
                />
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <Link
                    className="fn__link zoom"
                    target="_blank"
                    href="https://devright.com/"
                  >
                    Devright
                  </Link>
                </h3>
                <p>Custom SEO Campaign and WordPress Elementor Theme</p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/devrightport-thumb.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/devrightport-thumb.jpeg"
                    alt="Devright"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/devrightport-thumb.jpeg"
                />
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <Link
                    className="fn__link zoom"
                    target="_blank"
                    href="https://thedefiningpoint.com/"
                  >
                    The Defining Point
                  </Link>
                </h3>
                <p>Custom SEO Campaign</p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/definingpoint-port.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/definingpoint-port.jpeg"
                    alt="The Defining Point"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/definingpoint-port.jpeg"
                />
              </div>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <Link
                    className="fn__link zoom"
                    target="_blank"
                    href="https://onsiteboatcare.com/"
                  >
                    On Site Boat Care
                  </Link>
                </h3>
                <p>Custom SEO Campaign</p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/onsiteboatcare-port.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/onsiteboatcare-port.jpeg"
                    alt="On Site Boat Care"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/onsiteboatcare-port.jpeg"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
