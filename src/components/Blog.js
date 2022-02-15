import { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Link from 'next/link'

const Blog = () => {
  const [openHide, setOpenHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hideShow, setHideShow] = useState(null);
  const onClick = () => {
    if (!openHide) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpenHide(true);
      }, 2000);
    }
  };
  return (
    <section className="blog" id="blog">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>News &amp; Tips</h3>
        </div>
      </div>
      {/* /Main Title */}
      <div className="container">
        {/* Blog List */}
        <div className="blog_list">
          <SRLWrapper>
            <ul className="gallery_zoom">
              <li>
                <div className="item">
                  <div className="left_part">
                    <div className="img_holder">
                      <Link href="img/blog/1.jpg"><a className="zoom">
                        <img src="img/blog/1.jpg" alt="Img" className="" />
                      </a></Link>
                      {/* <img src="img/thumb/square.jpg" alt="image" /> */}
                      <div className="abs_img" data-bg-img="img/blog/1.jpg" />
                    </div>
                  </div>
                  <div className="right_part">
                    <div className="title">
                      <h3>
                        <Link href="img/blog/1.jpg"><a className="fn__link zoom">
                          {`What You Know About Design &amp; What You Don't
                                Know About Design.`}
                          `
                        </a></Link>
                      </h3>
                      <p>September 25. 2021</p>
                      {hideShow === 1 && (
                        <p className="hiddenText">
                          They really nailed it. This is one of the best themes
                          I have seen in a long time. Very nice design with lots
                          of customization available.
                        </p>
                      )}
                    </div>
                    <div className="main_button">
                      <Link href="#"><a className="zoom">
                        Continue Reading
                      </a></Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="left_part">
                    <div className="img_holder">
                      <Link href="img/blog/2.jpg"><a className="zoom">
                        <img src="img/blog/2.jpg" alt="Img" className="h-100" />
                      </a></Link>
                      {/* <img src="img/thumb/square.jpg" alt="image" /> */}
                      <div className="abs_img" data-bg-img="img/blog/2.jpg" />
                    </div>
                  </div>
                  <div className="right_part">
                    <div className="title">
                      <h3>
                        <Link href="img/blog/2.jpg"><a className="fn__link zoom">
                          {`What You Know About Design &amp; What You Don't
                                Know About Design.`}
                        </a></Link>
                      </h3>
                      <p>September 25. 2021</p>
                      {hideShow === 2 && (
                        <p className="hiddenText">
                          They really nailed it. This is one of the best themes
                          I have seen in a long time. Very nice design with lots
                          of customization available.
                        </p>
                      )}
                    </div>
                    <div className="main_button">
                      <Link href="#"><a className="zoom">
                        Continue Reading
                      </a></Link>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={`be_animated ${
                  openHide ? "wow fadeInTop done" : ""
                }`}
              >
                <div className="item">
                  <div className="left_part">
                    <div className="img_holder">
                      <Link href="img/blog/3.jpg"><a className="zoom">
                        <img src="img/blog/3.jpg" alt="Img" className="h-100" />
                      </a></Link>
                      {/* <img src="img/thumb/square.jpg" alt="image" /> */}
                      <div className="abs_img" data-bg-img="img/blog/3.jpg" />
                    </div>
                  </div>
                  <div className="right_part">
                    <div className="title">
                      <h3>
                        <Link href="img/blog/3.jpg"><a className="fn__link zoom">
                          {`What You Know About Design &amp; What You Don't
                                Know About Design.`}
                        </a></Link>
                      </h3>
                      <p>September 25. 2021</p>
                      {hideShow === 4 && (
                        <p className="hiddenText">
                          They really nailed it. This is one of the best themes
                          I have seen in a long time. Very nice design with lots
                          of customization available.
                        </p>
                      )}
                    </div>
                    <div className="main_button">
                      <Link href="#"><a className="zoom">
                        Continue Reading
                      </a></Link>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={`be_animated ${
                  openHide ? "wow fadeInTop done" : ""
                }`}
              >
                <div className="item">
                  <div className="left_part">
                    <div className="img_holder">
                      <Link href="img/blog/4.jpg"><a className="zoom">
                        <img src="img/blog/4.jpg" alt="Img" className="h-100" />
                      </a></Link>
                      {/* <img src="img/thumb/square.jpg" alt="image" /> */}
                      <div className="abs_img" data-bg-img="img/blog/4.jpg" />
                    </div>
                  </div>
                  <div className="right_part">
                    <div className="title">
                      <h3>
                        <Link href="img/blog/4.jpg"><a className="fn__link zoom">
                          {`What You Know About Design &amp; What You Don't
                                Know About Design.`}
                        </a></Link>
                      </h3>
                      <p>September 25. 2021</p>
                      {hideShow === 3 && (
                        <p className="hiddenText">
                          They really nailed it. This is one of the best themes
                          I have seen in a long time. Very nice design with lots
                          of customization available.
                        </p>
                      )}
                    </div>
                    <div className="main_button">
                      <Link href="#"><a className="zoom">
                        Continue Reading
                      </a></Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </SRLWrapper>
          <div className="clearfix" />
          <div className="load_more">
            <Link href="#"><a
              onClick={() => onClick()}
              data-initial="Load More"
              data-loading="Loading..."
              data-done="Done"
              data-no="No more items found"
              className={loading ? "loading" : ""}
            >
              <span className="text">
                {openHide ? "Done" : !loading ? "Load More" : "Loading..."}
              </span>
              <span className="icon" />
            </a></Link>
          </div>
        </div>
        {/* /Blog List */}
      </div>
    </section>
  );
};

export default Blog;
