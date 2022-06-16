import React from "react";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="rewall_fn_mobilemenu_wrap">
      {/* LOGO & HAMBURGER */}
      <div className="logo_hamb">
        <div className="in">
          <div className="menu_logo">
            <Link href="/">
              <a>
                <img src="img/logo-light.png" alt="Logo" />
              </a>
            </Link>
          </div>
          <div
            className={`hamburger hamburger--collapse-r ${
              toggle ? "is-active" : ""
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </div>
      </div>
      {/* /LOGO & HAMBURGER */}
      {/* MOBILE DROPDOWN MENU */}
      <div className={`mobilemenu ${toggle ? "opened d-block" : ""}`}>
        <div>
          <ul className="anchor_nav vert_menu_list">
            <li className="current">
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#biography">Biography</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#customer">Customers</a>
            </li>
            <li>
              <a href="#blog">News &amp; Tips</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* /MOBILE DROPDOWN MENU */}
    </div>
  );
};

export default MobileMenu;
