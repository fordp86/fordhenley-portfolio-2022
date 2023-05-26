"use client";

import React from "react";
import BootcampProjects from "../../src/components/BootcampProjects";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Bootcamp Projects</h3>
          <p>
            Below are a few samples of projects I completed while in my
            bootcamps on over the years.
          </p>
        </div>
      </div>
      {/* /Main Title */}
      <BootcampProjects />
    </section>
  );
}
