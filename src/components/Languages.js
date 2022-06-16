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
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={["fab", "github"]} />
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
