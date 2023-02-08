"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Blog() {
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
          <ul className="gallery_zoom">
            <li>
              <div className="item">
                <div className="left_part">
                  <div className="img_holder">
                    <Link className="zoom" href="img/blog/1.jpg">
                      <img src="img/blog/1.jpg" alt="Img" className="" />
                    </Link>
                  </div>
                </div>
                <div className="right_part">
                  <div className="title">
                    <h3>
                      <Link className="fn__link zoom" href="img/blog/1.jpg">
                        {`What You Know About Design &amp; What You Don't
                                  Know About Design.`}
                      </Link>
                    </h3>
                    <p>September 25. 2021</p>
                    {hideShow === 1 && (
                      <p className="hiddenText">
                        They really nailed it. This is one of the best themes I
                        have seen in a long time. Very nice design with lots of
                        customization available.
                      </p>
                    )}
                  </div>
                  <div className="main_button">
                    <Link className="zoom" href="#">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="left_part">
                  <div className="img_holder">
                    <Link className="zoom" href="img/blog/2.jpg">
                      <img src="img/blog/2.jpg" alt="Img" className="h-100" />
                    </Link>
                  </div>
                </div>
                <div className="right_part">
                  <div className="title">
                    <h3>
                      <Link className="fn__link zoom" href="img/blog/2.jpg">
                        {`What You Know About Design &amp; What You Don't
                                  Know About Design.`}
                      </Link>
                    </h3>
                    <p>September 25. 2021</p>
                    {hideShow === 2 && (
                      <p className="hiddenText">
                        They really nailed it. This is one of the best themes I
                        have seen in a long time. Very nice design with lots of
                        customization available.
                      </p>
                    )}
                  </div>
                  <div className="main_button">
                    <Link className="zoom" href="#">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`be_animated ${openHide ? "wow fadeInTop done" : ""}`}
            >
              <div className="item">
                <div className="left_part">
                  <div className="img_holder">
                    <Link className="zoom" href="img/blog/3.jpg">
                      <img src="img/blog/3.jpg" alt="Img" className="h-100" />
                    </Link>
                  </div>
                </div>
                <div className="right_part">
                  <div className="title">
                    <h3>
                      <Link className="fn__link zoom" href="img/blog/3.jpg">
                        {`What You Know About Design &amp; What You Don't
                                  Know About Design.`}
                      </Link>
                    </h3>
                    <p>September 25. 2021</p>
                    {hideShow === 4 && (
                      <p className="hiddenText">
                        They really nailed it. This is one of the best themes I
                        have seen in a long time. Very nice design with lots of
                        customization available.
                      </p>
                    )}
                  </div>
                  <div className="main_button">
                    <Link className="zoom" href="#">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`be_animated ${openHide ? "wow fadeInTop done" : ""}`}
            >
              <div className="item">
                <div className="left_part">
                  <div className="img_holder">
                    <Link className="zoom" href="img/blog/4.jpg">
                      <img src="img/blog/4.jpg" alt="Img" className="h-100" />
                    </Link>
                  </div>
                </div>
                <div className="right_part">
                  <div className="title">
                    <h3>
                      <Link className="fn__link zoom" href="img/blog/4.jpg">
                        {`What You Know About Design &amp; What You Don't
                                  Know About Design.`}
                      </Link>
                    </h3>
                    <p>September 25. 2021</p>
                    {hideShow === 3 && (
                      <p className="hiddenText">
                        They really nailed it. This is one of the best themes I
                        have seen in a long time. Very nice design with lots of
                        customization available.
                      </p>
                    )}
                  </div>
                  <div className="main_button">
                    <Link className="zoom" href="#">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="clearfix" />
          <div className="load_more">
            <Link
              onClick={() => onClick()}
              data-initial="Load More"
              data-loading="Loading..."
              data-done="Done"
              data-no="No more items found"
              className={loading ? "loading" : ""}
              href="#"
            >
              <span className="text">
                {openHide ? "Done" : !loading ? "Load More" : "Loading..."}
              </span>
              <span className="icon" />
            </Link>
          </div>
        </div>
        {/* /Blog List */}
      </div>
    </section>
  );
}
