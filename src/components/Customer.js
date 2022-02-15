// import Swiper from "swiper";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'


SwiperCore.use([Navigation, Autoplay]);

const Customer = () => {
  const props = {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 800,
  };
  return (
    <section className="customer" id="customer">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Customers</h3>
        </div>
      </div>
      {/* /Main Title */}
      <div className="container">
        {/* Partners */}
        <div className="fn_cs_partners">
          <ul>
            <li>
              <Link href="#"><a>
                <img src="img/partners/1.png" alt="image" />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <img src="img/partners/2.png" alt="image" />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <img src="img/partners/3.png" alt="image" />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <img src="img/partners/4.png" alt="image" />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <img src="img/partners/5.png" alt="image" />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <img src="img/partners/6.png" alt="image" />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <img src="img/partners/7.png" alt="image" />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <img src="img/partners/8.png" alt="image" />
              </a></Link>
            </li>
          </ul>
        </div>
        {/* /Partners */}
        <div className="fn_cs_testimonials">
          <Swiper {...props} className="owl-carousel owl-theme">
            <SwiperSlide className="item">
              <div className="icon">
                <img src="svg/quote.svg" alt="image" className="fn__svg" />
              </div>
              <div className="title_holder">
                <div className="desc">
                  <p>
                    They really nailed it. This is one of the best themes I have
                    seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites.
                  </p>
                </div>
                <div className="name">
                  <h3>Albert Walker</h3>
                  <p>Freelancer &amp; Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="icon">
                <img src="svg/quote.svg" alt="image" className="fn__svg" />
              </div>
              <div className="title_holder">
                <div className="desc">
                  <p>
                    {`This was exactly what I needed for my portfolio, and
                            it looks great. I had a couple issues that support
                            helped troubleshoot both via email and on the
                            comments, which definitely made it worth the price.
                            I'm very pleased with this purchase.`}
                  </p>
                </div>
                <div className="name">
                  <h3>Anna Barbera</h3>
                  <p>Photographer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="icon">
                <img src="svg/quote.svg" alt="image" className="fn__svg" />
              </div>
              <div className="title_holder">
                <div className="desc">
                  <p>
                    They really nailed it. This is one of the best themes I have
                    seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites.
                  </p>
                </div>
                <div className="name">
                  <h3>Dana Atkins</h3>
                  <p>Customer</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="my__nav">
            <Link href="#"><a className="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 492.004 492.004"
                style={{ enableBackground: "new 0 0 492.004 492.004" }}
                xmlSpace="preserve"
                className="fn__svg replaced-svg"
              >
                <g>
                  <g>
                    <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a></Link>
            <Link href="#"><a className="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 492.004 492.004"
                style={{ enableBackground: "new 0 0 492.004 492.004" }}
                xmlSpace="preserve"
                className="fn__svg replaced-svg"
              >
                <g>
                  <g>
                    <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
