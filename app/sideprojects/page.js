"use client";

import React from "react";
import SideProjects from "../../src/components/SideProjects.js";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Side Projects</h3>
          <p>Take a look at a few of my side projects and client work</p>
        </div>
      </div>
      {/* /Main Title */}
      <SideProjects />
    </section>
  );
}
