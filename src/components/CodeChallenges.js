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
                    href="https://fordp86.github.io/ztm-quotegenerator/"
                  >
                    ZTM Random Quote Generator
                  </a>
                </h3>
                <p>Random quote generated from the quote api.</p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/random-user.png">
                  <img
                    className="h-100"
                    src="img/portfolio/random-user.png"
                    alt="Coder Foundry ToDo"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/random-user.png"
                />
              </div>
              <div className="project_link">
                <a
                  className="fn__link zoom"
                  target="_blank"
                  href="https://dancing-kitten-76f060.netlify.app/"
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
                    href="https://dancing-kitten-76f060.netlify.app/"
                  >
                    Vue Random User Generator
                  </a>
                </h3>
                <p>Random user generator built with Vue CDN.</p>
              </div>
              <div className="img_holder">
                <div className="zoom" href="img/portfolio/random-user.png">
                  <img
                    className="h-100"
                    src="img/portfolio/random-user.png"
                    alt="Coder Foundry ToDo"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/random-user.png"
                />
              </div>
              <div className="project_link">
                <a
                  className="fn__link zoom"
                  target="_blank"
                  href="https://dancing-kitten-76f060.netlify.app/"
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
                    href="https://zippy-chimera-a47f89.netlify.app/"
                  >
                    Task Tracker Vue
                  </a>
                </h3>
                <p>
                  3 versions of of a Task Tracker built with Angular, React, and
                  Vue
                </p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/tasktracker-traversy-vue.png"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/tasktracker-traversy-vue.png"
                    alt="Coder Foundry ToDo"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/tasktracker-traversy-vue.png"
                />
              </div>
              <div className="project_link">
                <a
                  className="fn__link zoom"
                  target="_blank"
                  href="https://zippy-chimera-a47f89.netlify.app/"
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
                    href="https://eclectic-rolypoly-de7a44.netlify.app/"
                  >
                    Task Tracker React
                  </a>
                </h3>
                <p>
                  3 versions of of a Task Tracker built with Angular, React, and
                  Vue
                </p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/tasktracker-traversy-react.png"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/tasktracker-traversy-react.png"
                    alt="Coder Foundry ToDo"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/tasktracker-traversy-react.png"
                />
              </div>
              <div className="project_link">
                <a
                  className="fn__link zoom"
                  target="_blank"
                  href="https://eclectic-rolypoly-de7a44.netlify.app/"
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
                    href="https://famous-travesseiro-649c4b.netlify.app/"
                  >
                    Task Tracker Angular
                  </a>
                </h3>
                <p>
                  3 versions of of a Task Tracker built with Angular, React, and
                  Vue
                </p>
              </div>
              <div className="img_holder">
                <div
                  className="zoom"
                  href="img/portfolio/tasktracker-traversy-angular.png"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/tasktracker-traversy-angular.png"
                    alt="Coder Foundry ToDo"
                  />
                </div>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/tasktracker-traversy-angular.png"
                />
              </div>
              <div className="project_link">
                <a
                  className="fn__link zoom"
                  target="_blank"
                  href="https://famous-travesseiro-649c4b.netlify.app/"
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
