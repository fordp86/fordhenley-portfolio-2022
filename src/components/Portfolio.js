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
                        
                        data-title="Revolution Book"
                      >
                        Revolution Book
                      </a></Link>
                    </h3>
                    <p>illustration, design</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/2.jpg"><a
                      className="zoom"                      
                      data-title="Revolution Book"
                    >
                      <img className="h-100" src="img/portfolio/2.jpg" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/2.jpg"
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
                        data-title="Dreamers Logo"
                      >
                        Dreamers Logo
                      </a></Link>
                    </h3>
                    <p>illustration, design</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/3.jpg"><a
                      className="zoom"                      
                      data-title="Dreamers Logo"
                    >
                      <img className="h-100" src="img/portfolio/3.jpg" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/3.jpg"
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
                        
                        data-title="Reductive Design"
                      >
                        Reductive Design
                      </a></Link>
                    </h3>
                    <p>illustration, design</p>
                  </div>
                  <div className="img_holder">
                    <Link href="img/portfolio/4.jpg"><a
                      className="zoom"                      
                      data-title="Reductive Design"
                    >
                      <img className="h-100" src="img/portfolio/4.jpg" />
                    </a></Link>
                    {/* <img src="img/thumb/square.jpg" className="d-none" alt="image" /> */}
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/4.jpg"
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
