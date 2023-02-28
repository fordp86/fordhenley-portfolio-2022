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
                    href="https://fordhenley-todoproject.netlify.app/"
                  >
                    Coder Foundry ToDo
                  </Link>
                </h3>
                <p>
                  Basic ToDo List from Coder Foundry Bootcamp hosted on Netlify
                </p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/todo-coderfoundry.png"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/todo-coderfoundry.png"
                    alt="Coder Foundry ToDo"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/todo-coderfoundry.png"
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
                    href="https://ford-bootstrapgrids.netlify.app/"
                  >
                    Coder Foundry Bootstrap Grids Lab
                  </Link>
                </h3>
                <p>
                  Bootcamp project testing out different ways to use bootstrap
                  grids
                </p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/bootstrapgrids-coderfoundry.jpg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/bootstrapgrids-coderfoundry.jpg"
                    alt="Coder Foundry Bootstrap Grids Lab"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/bootstrapgrids-coderfoundry.jpg"
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
                    href="https://ford-bootstraplab.netlify.app/"
                  >
                    Coder Foundry Bootstrap Layouts Lab
                  </Link>
                </h3>
                <p>
                  Bootcamp project testing out different ways to use Bootstrap
                  to layout Forms
                </p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/bpptstraplab-coderfoundry.jpg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/bpptstraplab-coderfoundry.jpg"
                    alt="Coder Foundry Bootstrap Layouts Lab"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/bpptstraplab-coderfoundry.jpg"
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
                    href="https://guessfordsnumber.netlify.app/"
                  >
                    Bethel Tech Bootcamp Guessing Game
                  </Link>
                </h3>
                <p>
                  Guessing game built in React.js and React Bootstrap hosted on
                  Netlify
                </p>
              </div>
              <div className="img_holder">
                <Link className="zoom" href="img/portfolio/guessing-bethel.png">
                  <img
                    className="h-100"
                    src="img/portfolio/guessing-bethel.png"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/guessing-bethel.png"
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
                    href="https://allthewayup2100.netlify.app"
                  >
                    Coder Foundry: All The Way Up
                  </Link>
                </h3>
                <p>
                  Coder Foundry game to count numbers up to 100 and display the
                  results in a table. Built with Bootstrap hosted on Netlify
                </p>
              </div>
              <div className="img_holder">
                <Link
                  className="zoom"
                  href="img/portfolio/allthewayup-thumb.jpeg"
                >
                  <img
                    className="h-100"
                    src="img/portfolio/allthewayup-thumb.jpeg"
                    alt="Coder Foundry Bootcamp All The Way Up Game"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/allthewayup-thumb.jpeg"
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
                    href="https://fordsflipper.netlify.app"
                  >
                    Coder Foundry: Flipper
                  </Link>
                </h3>
                <p>Coder Foundry game to reverse a string with JavaScript.</p>
              </div>
              <div className="img_holder">
                <Link className="zoom" href="img/portfolio/flipper-thumb.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/flipper-thumb.jpeg"
                    alt="Coder Foundry: Flipper"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/flipper-thumb.jpeg"
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
                    href="https://fordsfizzbuzz.netlify.app"
                  >
                    Coder Foundry: FizzBuzz
                  </Link>
                </h3>
                <p>Coder Foundry Javascript FizzBuzz program.</p>
              </div>
              <div className="img_holder">
                <Link className="zoom" href="img/portfolio/fizzbuzz-thumb.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/fizzbuzz-thumb.jpeg"
                    alt="Coder Foundry: FizzBuzz"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/fizzbuzz-thumb.jpeg"
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
                    href="https://fordstacocat.netlify.app"
                  >
                    Coder Foundry: Taco Cat
                  </Link>
                </h3>
                <p>
                  Coder Foundry Javascript program to reverse a string and check
                  if it is a palindrome.
                </p>
              </div>
              <div className="img_holder">
                <Link className="zoom" href="img/portfolio/tacocat-thumb.jpeg">
                  <img
                    className="h-100"
                    src="img/portfolio/tacocat-thumb.jpeg"
                    alt="Coder Foundry: Taco Cat"
                  />
                </Link>
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/tacocat-thumb.jpeg"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
