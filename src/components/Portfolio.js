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
                       Lauryn Henley Freedom Coach"
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
                      <img className="h-100" src="img/portfolio/destinmusichiphop-port.jpeg" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/destinmusichiphop-port.jpeg"
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
