"use client";

import React from "react";
import { useEffect } from "react";
import "swiper/css";
import "../styles/globals.css";
import MobileMenu from "../src/layouts/MobileMenu";
import Sidebar from "../src/layouts/Sidebar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { animation, aTagClick, dataImage, parallax } from "../src/utils";

export default function RootLayout({ children }) {
  useEffect(() => {
    dataImage();
    parallax();
    animation();
    aTagClick();
  });
  return (
    <html lang="en">
      <head>
        <title>Ford Henley</title>
        <meta name="description" content="Ford Henly Portolio" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="rewall_fn_wrapper_all" data-nav-skin="transdark">
          {/* Wrapper */}
          <div className="rewall_fn_wrapper">
            <MobileMenu />
            <Sidebar />
            <div className="rewall_fn_content">
              <div className="fn__page">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
