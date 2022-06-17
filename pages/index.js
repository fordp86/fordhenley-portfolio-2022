import React from "react";
import { useEffect } from "react";
import About from "../src/components/About";
import Biography from "../src/components/Biography";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Languages from "../src/components/Languages";
import NextSection from "../src/components/NextSection";
import Portfolio from "../src/components/Portfolio";
import MobileMenu from "../src/layouts/MobileMenu";
import Sidebar from "../src/layouts/Sidebar";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { animation, aTagClick, dataImage, parallax } from "../src/utils";

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

            <NextSection mainUrl="contact" upUrl="languages" />
            {/* /Scroll to next section */}
            {/* Contact Section */}
            <Contact />
            {/* /Contact Section */}
          </div>
        </div>
        {/* Main Content */}
      </div>
      {/* /Wrapper */}
    </div>
  );
};

export default Index;
