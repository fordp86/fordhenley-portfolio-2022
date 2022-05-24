// import Swiper from "swiper";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'


SwiperCore.use([Navigation, Autoplay]);

const Languages = () => {
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
          <h3>Languages</h3>
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
      </div>
    </section>
  );
};

export default Languages;
