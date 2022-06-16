import { useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { isotopLayout } from "../utils";
import Link from 'next/link';

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
            Below are a few samples of the many sites I have worked on over the years. These sites were built on many different CMS platforms, frameworks and languages.
          </p>
          <div className="main_button">
            <Link href="#contact"><a>If you are interested, Get in Touch With Me</a></Link>
          </div>
        </div>
      </div>
      {/* /Main Title */}
      <SRLWrapper>
        <div className="portfolio_list">
          <div className="container">
            <ul className="fn__masonry gallery_zoom">
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Sunset PDI"
                      >
                        Sunset Pointe Development
                      </a></Link>
                    </h3>
                    <p>WordPress</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/sunsetpdi-thumb.jpeg"><a
                      className="zoom"
                      data-title="Sunset PDI"
                    >
                      <img className="h-100" src="img/portfolio/sunsetpdi-thumb.jpeg" alt="Sunset PDI Website" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Chris Hughes Blog"
                      >
                        Chris Hughes Blog
                      </a></Link>
                    </h3>
                    <p>Custom WordPress Theme, Bootstrap 4</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/chrishughes-port.jpeg"><a
                      className="zoom"                      
                      data-title="Chris Hughes Blog"
                    >
                      <img className="h-100" src="img/portfolio/chrishughes-port.jpeg" alt="Chris Hughes Blog" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/chrishughes-port.jpeg"
                    />
                  </div>
                </div>
              </li>
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="#"><a
                        className="fn__link zoom"                        
                        data-title="Lauryn Henley Freedom Coach"
                      >
                       Lauryn Henley Freedom Coach
                      </a></Link>
                    </h3>
                    <p>WordPress Theme, Front End Dev, WP Elementor</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/laurynhenleyport.jpeg"><a
                      className="zoom"                      
                      data-title="Lauryn Henley Freedom Coach"
                    >
                      <img className="h-100" src="img/portfolio/laurynhenleyport.jpeg" alt="Lauryn Henley Freedom Coach" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/laurynhenleyport.jpeg"
                    />
                  </div>
                </div>
              </li>
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Destin Music"
                      >
                        Destin Music
                      </a></Link>
                    </h3>
                    <p>Custom Drupal 7 Theme, Bootstrap 4</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/destinmusichiphop-port.jpeg"><a
                      className="zoom"                      
                      data-title="Destin Music"
                    >
                      <img className="h-100" src="img/portfolio/destinmusichiphop-port.jpeg" alt="Destin Music" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/destinmusichiphop-port.jpeg"
                    />
                  </div>
                </div>
              </li>
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Emerald Coast All Sports Association"
                      >
                        Emerald Coast All Sports Association
                      </a></Link>
                    </h3>
                    <p>Custom WordPress Theme, Bootstrap 5</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/asa-port-img-1.jpeg"><a
                      className="zoom"                      
                      data-title="Emerald Coast All Sports Association"
                    >
                      <img className="h-100" src="img/portfolio/asa-port-img-1.jpeg" alt="Emerald Coast All Sports Association" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Cornerstone Medicare"
                      >
                        Cornerstone Medicare
                      </a></Link>
                    </h3>
                    <p>Custom WordPress Theme, Bootstrap 4</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/cornertstone-port-img-1.jpeg"><a
                      className="zoom"                      
                      data-title="Cornerstone Medicare"
                    >
                      <img className="h-100" src="img/portfolio/cornertstone-port-img-1.jpeg" alt="Cornerstone Medicare" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="2 Tall Women"
                      >
                        2 Tall Women
                      </a></Link>
                    </h3>
                    <p>WordPress Elementor Theme Customization</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/2-tall-port-img-1-1.jpeg"><a
                      className="zoom"                      
                      data-title="2 Tall Women"
                    >
                      <img className="h-100" src="img/portfolio/2-tall-port-img-1-1.jpeg" alt="2 Tall Women" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/2-tall-port-img-1-1.jpeg"
                    />
                  </div>
                </div>
              </li>
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Randall’s Adventure"
                      >
                        Randall’s Adventure
                      </a></Link>
                    </h3>
                    <p>Drupal 7, Drupal Commerce</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/randallsadventure.jpeg"><a
                      className="zoom"                      
                      data-title="Randall’s Adventure"
                    >
                      <img className="h-100" src="img/portfolio/randallsadventure.jpeg" alt="Randall’s Adventure" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/randallsadventure.jpeg"
                    />
                  </div>
                </div>
              </li>
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Echols Metal Roofing"
                      >
                        Echols Metal Roofing
                      </a></Link>
                    </h3>
                    <p>Custom WordPress Theme, Bootstrap 5</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/echols-thumbnail.jpeg"><a
                      className="zoom"                      
                      data-title="Echols Metal Roofing"
                    >
                      <img className="h-100" src="img/portfolio/echols-thumbnail.jpeg" alt="Echols Metal Roofing" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/echols-thumbnail.jpeg"
                    />
                  </div>
                </div>
              </li>
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="46 Logistics"
                      >
                        46 Logistics
                      </a></Link>
                    </h3>
                    <p>Custom SEO Campaign</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/46logistics.jpeg"><a
                      className="zoom"                      
                      data-title="46 Logistics"
                    >
                      <img className="h-100" src="img/portfolio/46logistics.jpeg" alt="46 Logistics" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Sherman & Briscoe Orthodontics"
                      >
                        Sherman & Briscoe Orthodontics
                      </a></Link>
                    </h3>
                    <p>Custom WordPress Bootstrap Theme, Custom SEO Campaign</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/bracesbysb-port.jpeg"><a
                      className="zoom"                      
                      data-title="Sherman & Briscoe Orthodontics"
                    >
                      <img className="h-100" src="img/portfolio/bracesbysb-port.jpeg" alt="Sherman & Briscoe Orthodontics" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="Devright"
                      >
                        Devright
                      </a></Link>
                    </h3>
                    <p>Custom SEO Campaign and WordPress Elementor Theme</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/devrightport-thumb.jpeg"><a
                      className="zoom"                      
                      data-title="Devright"
                    >
                      <img className="h-100" src="img/portfolio/devrightport-thumb.jpeg" alt="Devright" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="The Defining Point"
                      >
                        The Defining Point
                      </a></Link>
                    </h3>
                    <p>Custom SEO Campaign</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/definingpoint-port.jpeg"><a
                      className="zoom"                      
                      data-title="The Defining Point"
                    >
                      <img className="h-100" src="img/portfolio/definingpoint-port.jpeg" alt="The Defining Point" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="#"><a
                        className="fn__link zoom"
                        
                        data-title="On Site Boat Care"
                      >
                        On Site Boat Care
                      </a></Link>
                    </h3>
                    <p>Custom SEO Campaign</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/onsiteboatcare-port.jpeg"><a
                      className="zoom"                      
                      data-title="On Site Boat Care"
                    >
                      <img className="h-100" src="img/portfolio/onsiteboatcare-port.jpeg" alt="On Site Boat Care" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/onsiteboatcare-port.jpeg"
                    />
                  </div>
                </div>
              </li>
              <li className="masonry_in">
                <div className="item">
                  <div className="title_holder">
                    <h3>
                      <Link href="https://fordhenley-todoproject.netlify.app/"><a
                        className="fn__link zoom"
                        
                        data-title="Coder Foundry ToDo"
                      >
                        Coder Foundry ToDo
                      </a></Link>
                    </h3>
                    <p>Basic ToDo List from Coder Foundry Bootcamp hosted on Netlify</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/todo-coderfoundry.png"><a
                      className="zoom"                      
                      data-title="Coder Foundry ToDo"
                    >
                      <img className="h-100" src="img/portfolio/todo-coderfoundry.png" alt="Coder Foundry ToDo"/>
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
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
                      <Link href="https://guessfordsnumber.netlify.app/"><a
                        className="fn__link zoom"
                        
                        data-title="Bethel Tech Bootcamp Guessing Game"
                      >
                        Bethel Tech Bootcamp Guessing Game
                      </a></Link>
                    </h3>
                    <p>Guessing game built in React.js and React Bootstrap hosted on Netlify</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/guessing-bethel.png"><a
                      className="zoom"                      
                      data-title="Bethel Tech Bootcamp Guessing Game"
                    >
                      <img className="h-100" src="img/portfolio/guessing-bethel.png" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/guessing-bethel.png"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SRLWrapper>
    </section>
  );
};

export default Portfolio;
