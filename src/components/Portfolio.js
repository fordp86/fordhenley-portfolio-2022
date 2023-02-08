import React from "react";
import { useEffect } from "react";
// import { SRLWrapper } from "simple-react-lightbox";
import { isotopLayout } from "../utils";
import Link from "next/link";

const Portfolio = () => {
  useEffect(() => {
    isotopLayout();
  }, []);
  return (
    <section className="portfolio" id="portfolio">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Portfolio</h3>
          <p>
            Below are a few samples of the many sites I have worked on over the
            years. These sites were built on many different CMS platforms,
            frameworks and languages.
          </p>
        </div>
      </div>
      {/* /Main Title */}
      <div className="portfolio_list">
        <div className="container">
          <ul className="fn__masonry gallery_zoom">
            <li className="masonry_in">
              <div className="item">
                <div className="title_holder">
                  <h3>
                    <Link className="fn__link zoom" target="_blank" to="#">
                      Sunset Pointe Development
                    </Link>
                  </h3>
                  <p>WordPress</p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/sunsetpdi-thumb.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/sunsetpdi-thumb.jpeg"
                      alt="Sunset PDI Website"
                    />
                  </Link>
                </div>
              </div>
            </li>
            <li className="masonry_in">
              <div className="item">
                <div className="title_holder">
                  <h3>
                    <Link className="fn__link zoom" target="_blank" href="#">
                      Chris Hughes Blog
                    </Link>
                  </h3>
                  <p>Custom WordPress Theme, Bootstrap 4</p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/chrishughes-port.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/chrishughes-port.jpeg"
                      alt="Chris Hughes Blog"
                    />
                  </Link>
                </div>
              </div>
            </li>
            <li className="masonry_in">
              <div className="item">
                <div className="title_holder">
                  <h3>
                    <Link className="fn__link zoom" href="#">
                      Lauryn Henley Freedom Coach
                    </Link>
                  </h3>
                  <p>WordPress Theme, Front End Dev, WP Elementor</p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/laurynhenleyport.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/laurynhenleyport.jpeg"
                      alt="Lauryn Henley Freedom Coach"
                    />
                  </Link>
                </div>
              </div>
            </li>
            <li className="masonry_in">
              <div className="item">
                <div className="title_holder">
                  <h3>
                    <Link className="fn__link zoom" target="_blank" href="#">
                      Destin Music
                    </Link>
                  </h3>
                  <p>Custom Drupal 7 Theme, Bootstrap 4</p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/destinmusichiphop-port.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/destinmusichiphop-port.jpeg"
                      alt="Destin Music"
                    />
                  </Link>
                </div>
              </div>
            </li>
            <li className="masonry_in">
              <div className="item">
                <div className="title_holder">
                  <h3>
                    <Link className="fn__link zoom" href="#">
                      Emerald Coast All Sports Association
                    </Link>
                  </h3>
                  <p>Custom WordPress Theme, Bootstrap 5</p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/asa-port-img-1.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/asa-port-img-1.jpeg"
                      alt="Emerald Coast All Sports Association"
                    />
                  </Link>
                  <div
                    className="abs_img"
                    data-bg-img="img/portfolio/asa-port-img-1.jpeg"
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
                  <Link
                    className="zoom"
                    href="img/portfolio/2-tall-port-img-1-1.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/2-tall-port-img-1-1.jpeg"
                      alt="2 Tall Women"
                    />
                  </Link>
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
                      href="https://www.randallsadventure.com/"
                    >
                      Randall’s Adventure
                    </Link>
                  </h3>
                  <p>Drupal 7, Drupal Commerce</p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/randallsadventure.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/randallsadventure.jpeg"
                      alt="Randall’s Adventure"
                    />
                  </Link>
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
                      href="http://echols.territory3dev.com/"
                    >
                      Echols Metal Roofing
                    </Link>
                  </h3>
                  <p>Custom WordPress Theme, Bootstrap 5</p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/echols-thumbnail.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/echols-thumbnail.jpeg"
                      alt="Echols Metal Roofing"
                    />
                  </Link>
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
                    Basic ToDo List from Coder Foundry Bootcamp hosted on
                    Netlify
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
                    Guessing game built in React.js and React Bootstrap hosted
                    on Netlify
                  </p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/guessing-bethel.png"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/guessing-bethel.png"
                    />
                  </Link>
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
                    Coder Foundry game to count numbers up to 100 and display
                    the results in a table. Built with Bootstrap hosted on
                    Netlify
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
                  <Link
                    className="zoom"
                    href="img/portfolio/flipper-thumb.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/flipper-thumb.jpeg"
                      alt="Coder Foundry: Flipper"
                    />
                  </Link>
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
                  <Link
                    className="zoom"
                    href="img/portfolio/fizzbuzz-thumb.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/fizzbuzz-thumb.jpeg"
                      alt="Coder Foundry: FizzBuzz"
                    />
                  </Link>
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
                    Coder Foundry Javascript program to reverse a string and
                    check if it is a palindrome.
                  </p>
                </div>
                <div className="img_holder">
                  <Link
                    className="zoom"
                    href="img/portfolio/tacocat-thumb.jpeg"
                  >
                    <img
                      className="h-100"
                      src="img/portfolio/tacocat-thumb.jpeg"
                      alt="Coder Foundry: Taco Cat"
                    />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
