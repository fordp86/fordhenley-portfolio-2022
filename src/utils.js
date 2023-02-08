export const dataImage = () => {
  let d = document.querySelectorAll("[data-bg-img");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-bg-img"
    )})`;
  }
  let d1 = document.querySelectorAll("[data-fn-bg-img");
  for (let i = 0; i < d1.length; i++) {
    const element = d1[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-fn-bg-img"
    )})`;
  }
};

export const parallax = () => {
  var Parallax = require("parallax-js");
  var scene = document.getElementById("scene");
  new Parallax(scene);
};

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW({
    callback: function (box) {
      box.classList.add("done");
    },
  }).init();
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};

export const isotopLayout = (container, item) => {
  setTimeout(() => {
    if (typeof window !== "undefined") {
      const Isotope = require("isotope-layout");
      new Isotope(container ? container : ".fn__masonry", {
        itemSelector: item ? item : ".masonry_in",
        percentPosition: true,
        masonry: {
          columnWidth: item ? item : ".masonry_in",
        },
      });
    }
  }, 0);
};

export const isActive = () => {
  document.querySelectorAll("#nav li").forEach((item) => {
    item.addEventListener("click", (event) => {
      document.querySelectorAll("#nav li").forEach((i) => {
        i.classList.remove("current");
      });
      item.classList.add("current");
    });
  });
};

// Colo change
// export const colorChange = () => {
//   const colors = document.querySelectorAll("#color_box ul li.item a");
//   colors.forEach((color) => {
//     color.addEventListener("click", () => {
//       const colorCode = color.getAttribute("data-color");
//       function isTooDark(hexcolor) {
//         var r = parseInt(hexcolor.substr(1, 2), 16);
//         var g = parseInt(hexcolor.substr(3, 2), 16);
//         var b = parseInt(hexcolor.substr(4, 2), 16);
//         var yiq = (r * 299 + g * 587 + b * 114) / 1000;
//         return yiq < 100 ? "#fff" : "#000";
//       }
//       document.querySelector(
//         "html"
//       ).style = `--main-color:${colorCode}; --text-color-for-main-bg:${isTooDark(
//         colorCode
//       )};`;
//       colors.forEach((co) => {
//         co.classList.remove("active");
//         color.classList.add("active");
//       });
//     });
//   });
// };
