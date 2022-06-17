import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


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
              <FontAwesomeIcon icon={brands('github')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={brands('drupal')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
                <FontAwesomeIcon icon={brands('wordpress')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
               <FontAwesomeIcon icon={brands('js')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('react')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('angular')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('aws')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('sass')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('bootstrap')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('css3')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('git-alt')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('html5')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('npm')} />
              </a></Link>
            </li>
            <li>
              <Link href="#"><a>
              <FontAwesomeIcon icon={brands('php')} />
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
