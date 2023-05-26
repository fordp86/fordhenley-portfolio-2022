"use client";

import React from "react";
import { useEffect } from "react";
import { isotopLayout } from "../utils";
import Link from "next/link";

export default function CodeChallenges() {
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
                    href="https://fordhenley-todoproject.netlify.app/"
                  >
                    Coder Foundry ToDo
                  </a>
                </h3>
                <p>
                  Basic ToDo List from Coder Foundry Bootcamp hosted on Netlify
                </p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/todo-coderfoundry.png"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/todo-coderfoundry.png"
                    alt="Coder Foundry ToDo"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/todo-coderfoundry.png"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://fordhenley-todoproject.netlify.app/"
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
                    href="https://ford-bootstrapgrids.netlify.app/"
                  >
                    Coder Foundry Bootstrap Grids Lab
                  </a>
                </h3>
                <p>
                  Bootcamp project testing out different ways to use bootstrap
                  grids
                </p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/bootstrapgrids-coderfoundry.jpg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/bootstrapgrids-coderfoundry.jpg"
                    alt="Coder Foundry Bootstrap Grids Lab"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/bootstrapgrids-coderfoundry.jpg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://ford-bootstrapgrids.netlify.app/"
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
                    href="https://ford-bootstraplab.netlify.app/"
                  >
                    Coder Foundry Bootstrap Layouts Lab
                  </a>
                </h3>
                <p>
                  Bootcamp project testing out different ways to use Bootstrap
                  to layout Forms
                </p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/bpptstraplab-coderfoundry.jpg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/bpptstraplab-coderfoundry.jpg"
                    alt="Coder Foundry Bootstrap Layouts Lab"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/bpptstraplab-coderfoundry.jpg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://ford-bootstraplab.netlify.app/"
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
                    href="https://allthewayup2100.netlify.app"
                  >
                    Coder Foundry: All The Way Up
                  </a>
                </h3>
                <p>
                  Coder Foundry game to count numbers up to 100 and display the
                  results in a table. Built with Bootstrap hosted on Netlify
                </p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/allthewayup-thumb.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/allthewayup-thumb.jpeg"
                    alt="Coder Foundry Bootcamp All The Way Up Game"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/allthewayup-thumb.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://allthewayup2100.netlify.app"
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
                    href="https://fordsflipper.netlify.app"
                  >
                    Coder Foundry: Flipper
                  </a>
                </h3>
                <p>Coder Foundry game to reverse a string with JavaScript.</p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/flipper-thumb.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/flipper-thumb.jpeg"
                    alt="Coder Foundry: Flipper"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/flipper-thumb.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://fordsflipper.netlify.app"
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
                    href="https://fordsfizzbuzz.netlify.app"
                  >
                    Coder Foundry: FizzBuzz
                  </a>
                </h3>
                <p>Coder Foundry Javascript FizzBuzz program.</p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/fizzbuzz-thumb.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/fizzbuzz-thumb.jpeg"
                    alt="Coder Foundry: FizzBuzz"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/fizzbuzz-thumb.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://fordsfizzbuzz.netlify.app"
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
                    href="https://fordstacocat.netlify.app"
                  >
                    Coder Foundry: Taco Cat
                  </a>
                </h3>
                <p>
                  Coder Foundry Javascript program to reverse a string and check
                  if it is a palindrome.
                </p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/tacocat-thumb.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/tacocat-thumb.jpeg"
                    alt="Coder Foundry: Taco Cat"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/tacocat-thumb.jpeg"
                />
              </div>
              <div className="project_link">
              <a
                    className="fn__link zoom"
                    target="_blank"
                    href="https://fordstacocat.netlify.app"
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
