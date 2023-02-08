"use client";

import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

SwiperCore.use([Navigation, Autoplay]);

export default function About() {
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
    <section className="customer" id="languages">
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
            <li className="github-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("github")} />
              </Link>
            </li>
            <li className="drupal-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("drupal")} />
              </Link>
            </li>
            <li className="wordpress-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("wordpress")} />
              </Link>
            </li>
            <li className="js-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("js")} />
              </Link>
            </li>
            <li className="react-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("react")} />
              </Link>
            </li>
            <li className="angular-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("angular")} />
              </Link>
            </li>
            <li className="aws-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("aws")} />
              </Link>
            </li>
            <li className="sass-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("sass")} />
              </Link>
            </li>
            <li className="bootstrap-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("bootstrap")} />
              </Link>
            </li>
            <li className="css-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("css3")} />
              </Link>
            </li>
            <li className="git-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("git-alt")} />
              </Link>
            </li>
            <li className="html5-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("html5")} />
              </Link>
            </li>
            <li className="npm-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("npm")} />
              </Link>
            </li>
            <li className="php-color">
              <Link href="#">
                <FontAwesomeIcon icon={brands("php")} />
              </Link>
            </li>
          </ul>
        </div>
        {/* /Partners */}
      </div>
    </section>
  );
}
