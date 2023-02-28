"use client";

import React from "react";
import CodeChallenges from "../../src/components/CodeChallenges";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Code Challenges</h3>
          <p>
            Below are a few samples of projects I completed while in my
            bootcamps on over the years.
          </p>
        </div>
      </div>
      {/* /Main Title */}
      <CodeChallenges />
    </section>
  );
}
