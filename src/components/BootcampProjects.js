"use client";

import React from "react";
import { useEffect } from "react";
import { isotopLayout } from "../utils";
import Link from "next/link";

export default function BootcampProjects() {
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
                    href="https://team-git-saved-frontend-main-i4t9.vercel.app/welcome"
                  >
                    Bethel Tech Bootcamp HomeTasktic App
                  </a>
                </h3>
                <p>
                  Fullstack Web App Final built with React Ionic and Express.js MySQL backend
                </p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/hometaskic-bethel.jpg">
                  <img
                    className="h-100"
                    src="img/portfolio/hometaskic-bethel.jpg"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/hometaskic-bethel.jpg"
                />
              </div>
            </div>
            <div>
            <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://team-git-saved-frontend-main-i4t9.vercel.app/welcome"
                  >
                   View Project
                  </a>
            </div>
          </li>
          <li className="masonry_in">
            <div className="item">
              <div className="title_holder">
                <h3>
                  <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://guessfordsnumber.netlify.app/"
                  >
                    Bethel Tech Bootcamp Guessing Game
                  </a>
                </h3>
                <p>
                  Guessing game built in React.js and React Bootstrap hosted on
                  Netlify
                </p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/guessing-bethel.png">
                  <img
                    className="h-100"
                    src="img/portfolio/guessing-bethel.png"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/guessing-bethel.png"
                />
              </div>
              <div>
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://guessfordsnumber.netlify.app/"
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
