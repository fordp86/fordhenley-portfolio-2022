"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolio/page",{

/***/ "(app-client)/./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aTagClick\": function() { return /* binding */ aTagClick; },\n/* harmony export */   \"animation\": function() { return /* binding */ animation; },\n/* harmony export */   \"dataImage\": function() { return /* binding */ dataImage; },\n/* harmony export */   \"isotopLayout\": function() { return /* binding */ isotopLayout; },\n/* harmony export */   \"parallax\": function() { return /* binding */ parallax; }\n/* harmony export */ });\nconst dataImage = () => {\n  let d = document.querySelectorAll(\"[data-bg-img\");\n\n  for (let i = 0; i < d.length; i++) {\n    const element = d[i];\n    element.style.backgroundImage = `url(${element.getAttribute(\"data-bg-img\")})`;\n  }\n\n  let d1 = document.querySelectorAll(\"[data-fn-bg-img\");\n\n  for (let i = 0; i < d1.length; i++) {\n    const element = d1[i];\n    element.style.backgroundImage = `url(${element.getAttribute(\"data-fn-bg-img\")})`;\n  }\n};\nconst parallax = () => {\n  var Parallax = __webpack_require__(/*! parallax-js */ \"(app-client)/./node_modules/parallax-js/dist/parallax.js\");\n\n  var scene = document.getElementById(\"scene\");\n  new Parallax(scene);\n};\nconst animation = () => {\n  if (true) {\n    window.WOW = __webpack_require__(/*! wowjs */ \"(app-client)/./node_modules/wowjs/dist/wow.js\");\n  }\n\n  new WOW.WOW({\n    callback: function (box) {\n      box.classList.add(\"done\");\n    }\n  }).init();\n};\nconst aTagClick = () => {\n  const aTag = document.querySelectorAll(\"[href='#']\");\n\n  for (let i = 0; i < aTag.length; i++) {\n    const a = aTag[i];\n    a.addEventListener(\"click\", e => {\n      e.preventDefault();\n    });\n  }\n};\nconst isotopLayout = (container, item) => {\n  setTimeout(() => {\n    if (true) {\n      const Isotope = __webpack_require__(/*! isotope-layout */ \"(app-client)/./node_modules/isotope-layout/js/isotope.js\");\n\n      new Isotope(container ? container : \".fn__masonry\", {\n        itemSelector: item ? item : \".masonry_in\",\n        percentPosition: true,\n        masonry: {\n          columnWidth: item ? item : \".masonry_in\"\n        }\n      });\n    }\n  }, 0);\n}; // Colo change\n// export const colorChange = () => {\n//   const colors = document.querySelectorAll(\"#color_box ul li.item a\");\n//   colors.forEach((color) => {\n//     color.addEventListener(\"click\", () => {\n//       const colorCode = color.getAttribute(\"data-color\");\n//       function isTooDark(hexcolor) {\n//         var r = parseInt(hexcolor.substr(1, 2), 16);\n//         var g = parseInt(hexcolor.substr(3, 2), 16);\n//         var b = parseInt(hexcolor.substr(4, 2), 16);\n//         var yiq = (r * 299 + g * 587 + b * 114) / 1000;\n//         return yiq < 100 ? \"#fff\" : \"#000\";\n//       }\n//       document.querySelector(\n//         \"html\"\n//       ).style = `--main-color:${colorCode}; --text-color-for-main-bg:${isTooDark(\n//         colorCode\n//       )};`;\n//       colors.forEach((co) => {\n//         co.classList.remove(\"active\");\n//         color.classList.add(\"active\");\n//       });\n//     });\n//   });\n// };\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsU0FBUyxHQUFHLE1BQU07RUFDN0IsSUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGNBQTFCLENBQVI7O0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQW1DO0lBQ2pDLE1BQU1FLE9BQU8sR0FBR0wsQ0FBQyxDQUFDRyxDQUFELENBQWpCO0lBQ0FFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxlQUFkLEdBQWlDLE9BQU1GLE9BQU8sQ0FBQ0csWUFBUixDQUNyQyxhQURxQyxDQUVyQyxHQUZGO0VBR0Q7O0VBQ0QsSUFBSUMsRUFBRSxHQUFHUixRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFUOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR00sRUFBRSxDQUFDTCxNQUF2QixFQUErQkQsQ0FBQyxFQUFoQyxFQUFvQztJQUNsQyxNQUFNRSxPQUFPLEdBQUdJLEVBQUUsQ0FBQ04sQ0FBRCxDQUFsQjtJQUNBRSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsZUFBZCxHQUFpQyxPQUFNRixPQUFPLENBQUNHLFlBQVIsQ0FDckMsZ0JBRHFDLENBRXJDLEdBRkY7RUFHRDtBQUNGLENBZk07QUFpQkEsTUFBTUUsUUFBUSxHQUFHLE1BQU07RUFDNUIsSUFBSUMsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDZFQUFELENBQXRCOztFQUNBLElBQUlDLEtBQUssR0FBR1osUUFBUSxDQUFDYSxjQUFULENBQXdCLE9BQXhCLENBQVo7RUFDQSxJQUFJSCxRQUFKLENBQWFFLEtBQWI7QUFDRCxDQUpNO0FBTUEsTUFBTUUsU0FBUyxHQUFHLE1BQU07RUFDN0IsSUFBSSxNQUErQjtJQUNqQ0MsTUFBTSxDQUFDQyxHQUFQLEdBQWFMLG1CQUFPLENBQUMsNERBQUQsQ0FBcEI7RUFDRDs7RUFDRCxJQUFJSyxHQUFHLENBQUNBLEdBQVIsQ0FBWTtJQUNWQyxRQUFRLEVBQUUsVUFBVUMsR0FBVixFQUFlO01BQ3ZCQSxHQUFHLENBQUNDLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixNQUFsQjtJQUNEO0VBSFMsQ0FBWixFQUlHQyxJQUpIO0FBS0QsQ0FUTTtBQVdBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0VBQzdCLE1BQU1DLElBQUksR0FBR3ZCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBYjs7RUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxQixJQUFJLENBQUNwQixNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztJQUNwQyxNQUFNc0IsQ0FBQyxHQUFHRCxJQUFJLENBQUNyQixDQUFELENBQWQ7SUFDQXNCLENBQUMsQ0FBQ0MsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNkJDLENBQUQsSUFBTztNQUNqQ0EsQ0FBQyxDQUFDQyxjQUFGO0lBQ0QsQ0FGRDtFQUdEO0FBQ0YsQ0FSTTtBQVVBLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxTQUFELEVBQVlDLElBQVosS0FBcUI7RUFDL0NDLFVBQVUsQ0FBQyxNQUFNO0lBQ2YsSUFBSSxNQUErQjtNQUNqQyxNQUFNQyxPQUFPLEdBQUdyQixtQkFBTyxDQUFDLGdGQUFELENBQXZCOztNQUNBLElBQUlxQixPQUFKLENBQVlILFNBQVMsR0FBR0EsU0FBSCxHQUFlLGNBQXBDLEVBQW9EO1FBQ2xESSxZQUFZLEVBQUVILElBQUksR0FBR0EsSUFBSCxHQUFVLGFBRHNCO1FBRWxESSxlQUFlLEVBQUUsSUFGaUM7UUFHbERDLE9BQU8sRUFBRTtVQUNQQyxXQUFXLEVBQUVOLElBQUksR0FBR0EsSUFBSCxHQUFVO1FBRHBCO01BSHlDLENBQXBEO0lBT0Q7RUFDRixDQVhTLEVBV1AsQ0FYTyxDQUFWO0FBWUQsQ0FiTSxFQWVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy5qcz81ZDgwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkYXRhSW1hZ2UgPSAoKSA9PiB7XHJcbiAgbGV0IGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYmctaW1nXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRbaV07XHJcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtlbGVtZW50LmdldEF0dHJpYnV0ZShcclxuICAgICAgXCJkYXRhLWJnLWltZ1wiXHJcbiAgICApfSlgO1xyXG4gIH1cclxuICBsZXQgZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZm4tYmctaW1nXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZDEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkMVtpXTtcclxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VsZW1lbnQuZ2V0QXR0cmlidXRlKFxyXG4gICAgICBcImRhdGEtZm4tYmctaW1nXCJcclxuICAgICl9KWA7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhcmFsbGF4ID0gKCkgPT4ge1xyXG4gIHZhciBQYXJhbGxheCA9IHJlcXVpcmUoXCJwYXJhbGxheC1qc1wiKTtcclxuICB2YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjZW5lXCIpO1xyXG4gIG5ldyBQYXJhbGxheChzY2VuZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuV09XID0gcmVxdWlyZShcIndvd2pzXCIpO1xyXG4gIH1cclxuICBuZXcgV09XLldPVyh7XHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKGJveCkge1xyXG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XHJcbiAgICB9LFxyXG4gIH0pLmluaXQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhVGFnQ2xpY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgYVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHJlZj0nIyddXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYVRhZy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgYSA9IGFUYWdbaV07XHJcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNvdG9wTGF5b3V0ID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3QgSXNvdG9wZSA9IHJlcXVpcmUoXCJpc290b3BlLWxheW91dFwiKTtcclxuICAgICAgbmV3IElzb3RvcGUoY29udGFpbmVyID8gY29udGFpbmVyIDogXCIuZm5fX21hc29ucnlcIiwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogaXRlbSA/IGl0ZW0gOiBcIi5tYXNvbnJ5X2luXCIsXHJcbiAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4gICAgICAgIG1hc29ucnk6IHtcclxuICAgICAgICAgIGNvbHVtbldpZHRoOiBpdGVtID8gaXRlbSA6IFwiLm1hc29ucnlfaW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCAwKTtcclxufTtcclxuXHJcbi8vIENvbG8gY2hhbmdlXHJcbi8vIGV4cG9ydCBjb25zdCBjb2xvckNoYW5nZSA9ICgpID0+IHtcclxuLy8gICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbG9yX2JveCB1bCBsaS5pdGVtIGFcIik7XHJcbi8vICAgY29sb3JzLmZvckVhY2goKGNvbG9yKSA9PiB7XHJcbi8vICAgICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBjb2xvckNvZGUgPSBjb2xvci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIpO1xyXG4vLyAgICAgICBmdW5jdGlvbiBpc1Rvb0RhcmsoaGV4Y29sb3IpIHtcclxuLy8gICAgICAgICB2YXIgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigxLCAyKSwgMTYpO1xyXG4vLyAgICAgICAgIHZhciBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDMsIDIpLCAxNik7XHJcbi8vICAgICAgICAgdmFyIGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcclxuLy8gICAgICAgICB2YXIgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwO1xyXG4vLyAgICAgICAgIHJldHVybiB5aXEgPCAxMDAgPyBcIiNmZmZcIiA6IFwiIzAwMFwiO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbi8vICAgICAgICAgXCJodG1sXCJcclxuLy8gICAgICAgKS5zdHlsZSA9IGAtLW1haW4tY29sb3I6JHtjb2xvckNvZGV9OyAtLXRleHQtY29sb3ItZm9yLW1haW4tYmc6JHtpc1Rvb0RhcmsoXHJcbi8vICAgICAgICAgY29sb3JDb2RlXHJcbi8vICAgICAgICl9O2A7XHJcbi8vICAgICAgIGNvbG9ycy5mb3JFYWNoKChjbykgPT4ge1xyXG4vLyAgICAgICAgIGNvLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbi8vICAgICAgICAgY29sb3IuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gfTtcclxuIl0sIm5hbWVzIjpbImRhdGFJbWFnZSIsImQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0QXR0cmlidXRlIiwiZDEiLCJwYXJhbGxheCIsIlBhcmFsbGF4IiwicmVxdWlyZSIsInNjZW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJhbmltYXRpb24iLCJ3aW5kb3ciLCJXT1ciLCJjYWxsYmFjayIsImJveCIsImNsYXNzTGlzdCIsImFkZCIsImluaXQiLCJhVGFnQ2xpY2siLCJhVGFnIiwiYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc290b3BMYXlvdXQiLCJjb250YWluZXIiLCJpdGVtIiwic2V0VGltZW91dCIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJwZXJjZW50UG9zaXRpb24iLCJtYXNvbnJ5IiwiY29sdW1uV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/utils.js\n"));

/***/ })

});