import React from "react";
import { useEffect } from "react";
import About from "../src/components/About";
import Biography from "../src/components/Biography";
import Languages from "../src/components/Languages";
import NextSection from "../src/components/NextSection";
import Portfolio from "../src/components/Portfolio";
import MobileMenu from "../src/layouts/MobileMenu";
import Sidebar from "../src/layouts/Sidebar";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { animation, aTagClick, dataImage, parallax } from "../src/utils";
import Contact from "../src/components/Contact";

const Index = () => {
  useEffect(() => {
    dataImage();
    parallax();
    animation();
    aTagClick();
  });
  return (
    <div className="rewall_fn_wrapper_all" data-nav-skin="transdark">
      {/* Wrapper */}
      <div className="rewall_fn_wrapper">
        {/* <ColorScheme /> */}
        <MobileMenu />
        <Sidebar />

        <div className="rewall_fn_content">
          <div className="fn__page">
            <About />
            {/* Scroll to next section */}

            <NextSection mainUrl="biography" upUrl="about" />
            {/* /Scroll to next section */}
            {/* Biography Section */}
            <Biography />
            {/* /Biography Section */}
            {/* Scroll to next section */}
            <NextSection mainUrl="portfolio" upUrl="biography" />
            {/* /Scroll to next section */}
            {/* Portfolio Section */}
            <Portfolio />
            {/* /Portfolio Section */}
            {/* /Scroll to next section */}
            <NextSection mainUrl="languages" upUrl="service" />
            {/* /Scroll to next section */}
            {/* Languages Section */}
            <Languages />
            {/* /Languages Section */}
            {/* Scroll to next section */}
            {/* Languages Section */}
            <Contact />
            {/* /Contact Section */}
            {/* Scroll to next section */}
          </div>
        </div>
        {/* Main Content */}
      </div>
      {/* /Wrapper */}
    </div>
  );
};

export default Index;
