"use client";

import React from "react";
import PortfolioBox from "../../src/components/PortfolioBox";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Portfolio</h3>
          <p>
            Below are a few samples of the many sites I have worked on over the
            years. These sites were built on many different CMS platforms,
            frameworks and languages.
          </p>
        </div>
      </div>
      {/* /Main Title */}
      <PortfolioBox />
    </section>
  );
}
