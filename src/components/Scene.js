"use client";

import React from "react";
import { useEffect } from "react";
import { parallax } from "../../src/utils";

export default function Scene() {
  useEffect(() => {
    parallax();
  });
  return (
    <div className="left_in" id="scene">
      <div className="layer border" data-depth="0.2">
        <span className="span1" />
        <span className="span2" />
        <img src="img/thumb/450-550.jpg" alt="image" />
      </div>
      <div className="img_holder layer" data-depth="0.3">
        <img src="img/thumb/450-550.jpg" alt="image" />
        <div className="abs_img" data-bg-img="img/about.jpg" />
      </div>
      <div className="dots layer" data-switch="disable" data-depth="0.4"></div>
    </div>
  );
}
