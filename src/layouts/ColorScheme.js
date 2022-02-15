import { useEffect, useRef, useState } from "react";
import { colorChange } from "../utils";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const ColorScheme = () => {
  useEffect(() => {
    colorChange();
  });
  const [open, setOpen] = useState(false);
  const [showVlue, setShowVlue] = useState(1);
  const showVlueFun = (value) =>
    value === showVlue ? "item" : "item disabled";

  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div
      className={`rewall_fn_color_scheme ${open ? "opened" : ""}`}
      ref={domNode}
    >
      <a className="opener" href="#" onClick={() => setOpen(true)}>
        <img src="svg/color.svg" alt="image" className="fn__svg" />
      </a>
      <div className="color_box" id="color_box">
        <a href="#" className="closer" onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 341.751 341.751"
            style={{ enableBackground: "new 0 0 341.751 341.751" }}
            xmlSpace="preserve"
            className="fn__svg replaced-svg"
          >
            <g>
              <g>
                <rect
                  x="-49.415"
                  y="149.542"
                  transform="matrix(0.7072 -0.707 0.707 0.7072 -70.7868 170.8326)"
                  width="440.528"
                  height="42.667"
                />
              </g>
            </g>
            <g>
              <g>
                <rect
                  x="149.569"
                  y="-49.388"
                  transform="matrix(0.707 -0.7072 0.7072 0.707 -70.7712 170.919)"
                  width="42.667"
                  height="440.528"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>
        <ul>
          <li className={showVlueFun(1)}>
            <h5>Online clothing store</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#5d6e99"
                  style={{ backgroundColor: "rgb(93, 110, 153)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#b18780"
                  style={{ backgroundColor: "rgb(177, 135, 128)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#605e2d"
                  style={{ backgroundColor: "rgb(96, 94, 45)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#7c554e"
                  style={{ backgroundColor: "rgb(124, 85, 78)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#f4988b"
                  style={{ backgroundColor: "rgb(244, 152, 139)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#dfc1b6"
                  style={{ backgroundColor: "rgb(223, 193, 182)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#c77fb1"
                  style={{ backgroundColor: "rgb(199, 127, 177)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a9aa71"
                  style={{ backgroundColor: "rgb(169, 170, 113)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#96939c"
                  style={{ backgroundColor: "rgb(150, 147, 156)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#f36b51"
                  style={{ backgroundColor: "rgb(243, 107, 81)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(1)}>
            <h5>{`Website for women's clothing, accessories and jewelry store`}</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#3e1c1d"
                  style={{ backgroundColor: "rgb(62, 28, 29)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#694141"
                  style={{ backgroundColor: "rgb(105, 65, 65)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#532c27"
                  style={{ backgroundColor: "rgb(83, 44, 39)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#7b5650"
                  style={{ backgroundColor: "rgb(123, 86, 80)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#2d1012"
                  style={{ backgroundColor: "rgb(45, 16, 18)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#92665d"
                  style={{ backgroundColor: "rgb(146, 102, 93)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a9806e"
                  style={{ backgroundColor: "rgb(169, 128, 110)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#c29d83"
                  style={{ backgroundColor: "rgb(194, 157, 131)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#710e3d"
                  style={{ backgroundColor: "rgb(113, 14, 61)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#96285b"
                  style={{ backgroundColor: "rgb(150, 40, 91)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(1)}>
            <h5>Wedding salon website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#e397b1"
                  style={{ backgroundColor: "rgb(227, 151, 177)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ce7d7a"
                  style={{ backgroundColor: "rgb(206, 125, 122)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a58264"
                  style={{ backgroundColor: "rgb(165, 130, 100)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#600b28"
                  style={{ backgroundColor: "rgb(96, 11, 40)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#5e2c21"
                  style={{ backgroundColor: "rgb(94, 44, 33)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#e8d5c1"
                  style={{ backgroundColor: "rgb(232, 213, 193)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#3c0f12"
                  style={{ backgroundColor: "rgb(60, 15, 18)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#b47f77"
                  style={{ backgroundColor: "rgb(180, 127, 119)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#634352"
                  style={{ backgroundColor: "rgb(99, 67, 82)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#11131f"
                  style={{ backgroundColor: "rgb(17, 19, 31)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(2)}>
            <h5>Website on the topic of cars</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#0d0208"
                  style={{ backgroundColor: "rgb(13, 2, 8)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#170b19"
                  style={{ backgroundColor: "rgb(23, 11, 25)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#3a0f18"
                  style={{ backgroundColor: "rgb(58, 15, 24)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#661615"
                  style={{ backgroundColor: "rgb(102, 22, 21)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#181c39"
                  style={{ backgroundColor: "rgb(24, 28, 57)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#1a344f"
                  style={{ backgroundColor: "rgb(26, 52, 79)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#0d4d66"
                  style={{ backgroundColor: "rgb(13, 77, 102)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#09637e"
                  style={{ backgroundColor: "rgb(9, 99, 126)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#0b89a0"
                  style={{ backgroundColor: "rgb(11, 137, 160)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#0fa5c0"
                  style={{ backgroundColor: "rgb(15, 165, 192)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(2)}>
            <h5>Entertainment website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#c851ad"
                  style={{ backgroundColor: "rgb(200, 81, 173)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ac3a9c"
                  style={{ backgroundColor: "rgb(172, 58, 156)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#682374"
                  style={{ backgroundColor: "rgb(104, 35, 116)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#60226f"
                  style={{ backgroundColor: "rgb(96, 34, 111)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#7f78ac"
                  style={{ backgroundColor: "rgb(127, 120, 172)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#4c8ca8"
                  style={{ backgroundColor: "rgb(76, 140, 168)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#7354b1"
                  style={{ backgroundColor: "rgb(115, 84, 177)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#151a75"
                  style={{ backgroundColor: "rgb(21, 26, 117)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#4b1549"
                  style={{ backgroundColor: "rgb(75, 21, 73)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#2c0929"
                  style={{ backgroundColor: "rgb(44, 9, 41)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(2)}>
            <h5>Home Decor Shop</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#4f4232"
                  style={{ backgroundColor: "rgb(79, 66, 50)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#f3d9b6"
                  style={{ backgroundColor: "rgb(243, 217, 182)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#afc15d"
                  style={{ backgroundColor: "rgb(175, 193, 93)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#8e4c29"
                  style={{ backgroundColor: "rgb(142, 76, 41)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#250c08"
                  style={{ backgroundColor: "rgb(37, 12, 8)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#f6ba88"
                  style={{ backgroundColor: "rgb(246, 186, 136)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#f59e82"
                  style={{ backgroundColor: "rgb(245, 158, 130)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#421b0c"
                  style={{ backgroundColor: "rgb(66, 27, 12)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#af9a7d"
                  style={{ backgroundColor: "rgb(175, 154, 125)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#242408"
                  style={{ backgroundColor: "rgb(36, 36, 8)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(3)}>
            <h5>{`Photographer's site`}</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#673b28"
                  style={{ backgroundColor: "rgb(103, 59, 40)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#77482c"
                  style={{ backgroundColor: "rgb(119, 72, 44)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#49271e"
                  style={{ backgroundColor: "rgb(73, 39, 30)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#795d48"
                  style={{ backgroundColor: "rgb(121, 93, 72)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#916a41"
                  style={{ backgroundColor: "rgb(145, 106, 65)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#301615"
                  style={{ backgroundColor: "rgb(48, 22, 21)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#92785f"
                  style={{ backgroundColor: "rgb(146, 120, 95)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#dfd3d3"
                  style={{ backgroundColor: "rgb(223, 211, 211)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#c8b7af"
                  style={{ backgroundColor: "rgb(200, 183, 175)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ae9883"
                  style={{ backgroundColor: "rgb(174, 152, 131)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(3)}>
            <h5>Sports website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#12151a"
                  style={{ backgroundColor: "rgb(18, 21, 26)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#2b2219"
                  style={{ backgroundColor: "rgb(43, 34, 25)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#024387"
                  style={{ backgroundColor: "rgb(2, 67, 135)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#9fa792"
                  style={{ backgroundColor: "rgb(159, 167, 146)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#907608"
                  style={{ backgroundColor: "rgb(144, 118, 8)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#121e1a"
                  style={{ backgroundColor: "rgb(18, 30, 26)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#200f08"
                  style={{ backgroundColor: "rgb(32, 15, 8)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#730101"
                  style={{ backgroundColor: "rgb(115, 1, 1)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#574c1e"
                  style={{ backgroundColor: "rgb(87, 76, 30)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#3e3e36"
                  style={{ backgroundColor: "rgb(62, 62, 54)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(3)}>
            <h5>Restaurant website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#e8c992"
                  style={{ backgroundColor: "rgb(232, 201, 146)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#dda742"
                  style={{ backgroundColor: "rgb(221, 167, 66)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#db901b"
                  style={{ backgroundColor: "rgb(219, 144, 27)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#e08f02"
                  style={{ backgroundColor: "rgb(224, 143, 2)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#c66507"
                  style={{ backgroundColor: "rgb(198, 101, 7)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#b07857"
                  style={{ backgroundColor: "rgb(176, 120, 87)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#aa2c05"
                  style={{ backgroundColor: "rgb(170, 44, 5)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#7d1d07"
                  style={{ backgroundColor: "rgb(125, 29, 7)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#450f03"
                  style={{ backgroundColor: "rgb(69, 15, 3)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#371001"
                  style={{ backgroundColor: "rgb(55, 16, 1)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(4)}>
            <h5>Real estate website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#b97d47"
                  style={{ backgroundColor: "rgb(185, 125, 71)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#d5c697"
                  style={{ backgroundColor: "rgb(213, 198, 151)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#888365"
                  style={{ backgroundColor: "rgb(136, 131, 101)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#624a25"
                  style={{ backgroundColor: "rgb(98, 74, 37)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a74c1d"
                  style={{ backgroundColor: "rgb(167, 76, 29)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ef8b50"
                  style={{ backgroundColor: "rgb(239, 139, 80)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#9ca816"
                  style={{ backgroundColor: "rgb(156, 168, 22)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#7c8824"
                  style={{ backgroundColor: "rgb(124, 136, 36)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#596c10"
                  style={{ backgroundColor: "rgb(89, 108, 16)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#363112"
                  style={{ backgroundColor: "rgb(54, 49, 18)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(4)}>
            <h5>Medical website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#0d0a11"
                  style={{ backgroundColor: "rgb(13, 10, 17)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#262431"
                  style={{ backgroundColor: "rgb(38, 36, 49)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#575c6f"
                  style={{ backgroundColor: "rgb(87, 92, 111)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a7a7b1"
                  style={{ backgroundColor: "rgb(167, 167, 177)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#d7d1db"
                  style={{ backgroundColor: "rgb(215, 209, 219)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#babfd2"
                  style={{ backgroundColor: "rgb(186, 191, 210)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a1b9d5"
                  style={{ backgroundColor: "rgb(161, 185, 213)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#869dd1"
                  style={{ backgroundColor: "rgb(134, 157, 209)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#5576ac"
                  style={{ backgroundColor: "rgb(85, 118, 172)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#133167"
                  style={{ backgroundColor: "rgb(19, 49, 103)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#132017"
                  style={{ backgroundColor: "rgb(19, 32, 23)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#1d8a6b"
                  style={{ backgroundColor: "rgb(29, 138, 107)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#4e7c60"
                  style={{ backgroundColor: "rgb(78, 124, 96)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#689a81"
                  style={{ backgroundColor: "rgb(104, 154, 129)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#255641"
                  style={{ backgroundColor: "rgb(37, 86, 65)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#97c8b3"
                  style={{ backgroundColor: "rgb(151, 200, 179)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#d5e0d0"
                  style={{ backgroundColor: "rgb(213, 224, 208)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#5a4b24"
                  style={{ backgroundColor: "rgb(90, 75, 36)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#4ab89d"
                  style={{ backgroundColor: "rgb(74, 184, 157)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a18e63"
                  style={{ backgroundColor: "rgb(161, 142, 99)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(4)}>
            <h5>Travel agency website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#e4e0dd"
                  style={{ backgroundColor: "rgb(228, 224, 221)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#1a9ca9"
                  style={{ backgroundColor: "rgb(26, 156, 169)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#e77992"
                  style={{ backgroundColor: "rgb(231, 121, 146)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#40333a"
                  style={{ backgroundColor: "rgb(64, 51, 58)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#97b6cb"
                  style={{ backgroundColor: "rgb(151, 182, 203)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#6388a2"
                  style={{ backgroundColor: "rgb(99, 136, 162)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#b1c1ce"
                  style={{ backgroundColor: "rgb(177, 193, 206)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#7bc8dc"
                  style={{ backgroundColor: "rgb(123, 200, 220)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#a5c3db"
                  style={{ backgroundColor: "rgb(165, 195, 219)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#57c2d4"
                  style={{ backgroundColor: "rgb(87, 194, 212)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(5)}>
            <h5>Business website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#efb38e"
                  style={{ backgroundColor: "rgb(239, 179, 142)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#8a5d4a"
                  style={{ backgroundColor: "rgb(138, 93, 74)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#fef3d5"
                  style={{ backgroundColor: "rgb(254, 243, 213)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#9a563f"
                  style={{ backgroundColor: "rgb(154, 86, 63)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#aea5a0"
                  style={{ backgroundColor: "rgb(174, 165, 160)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#943014"
                  style={{ backgroundColor: "rgb(148, 48, 20)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#253d49"
                  style={{ backgroundColor: "rgb(37, 61, 73)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#48312b"
                  style={{ backgroundColor: "rgb(72, 49, 43)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#e5c7ad"
                  style={{ backgroundColor: "rgb(229, 199, 173)" }}
                />
              </li>
              <li>
                <a href="#" data-color="#" />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#beb8ac"
                  style={{ backgroundColor: "rgb(190, 184, 172)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#697569"
                  style={{ backgroundColor: "rgb(105, 117, 105)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#203331"
                  style={{ backgroundColor: "rgb(32, 51, 49)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#b82921"
                  style={{ backgroundColor: "rgb(184, 41, 33)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ee3834"
                  style={{ backgroundColor: "rgb(238, 56, 52)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#732c30"
                  style={{ backgroundColor: "rgb(115, 44, 48)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#050601"
                  style={{ backgroundColor: "rgb(5, 6, 1)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#3a261d"
                  style={{ backgroundColor: "rgb(58, 38, 29)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#746756"
                  style={{ backgroundColor: "rgb(116, 103, 86)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#8c7b71"
                  style={{ backgroundColor: "rgb(140, 123, 113)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#0f2936"
                  style={{ backgroundColor: "rgb(15, 41, 54)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#5b737f"
                  style={{ backgroundColor: "rgb(91, 115, 127)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#d1f3ff"
                  style={{ backgroundColor: "rgb(209, 243, 255)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#b3d3fc"
                  style={{ backgroundColor: "rgb(179, 211, 252)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#4870a3"
                  style={{ backgroundColor: "rgb(72, 112, 163)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#19375b"
                  style={{ backgroundColor: "rgb(25, 55, 91)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#142132"
                  style={{ backgroundColor: "rgb(20, 33, 50)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#020a17"
                  style={{ backgroundColor: "rgb(2, 10, 23)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#18192e"
                  style={{ backgroundColor: "rgb(24, 25, 46)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#333a57"
                  style={{ backgroundColor: "rgb(51, 58, 87)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(5)}>
            <h5>Lawyer website</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#948d95"
                  style={{ backgroundColor: "rgb(148, 141, 149)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#d2d2c6"
                  style={{ backgroundColor: "rgb(210, 210, 198)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#55566b"
                  style={{ backgroundColor: "rgb(85, 86, 107)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#8d98ac"
                  style={{ backgroundColor: "rgb(141, 152, 172)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#dfccbd"
                  style={{ backgroundColor: "rgb(223, 204, 189)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#6a5751"
                  style={{ backgroundColor: "rgb(106, 87, 81)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#40050b"
                  style={{ backgroundColor: "rgb(64, 5, 11)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ebe8df"
                  style={{ backgroundColor: "rgb(235, 232, 223)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#50401e"
                  style={{ backgroundColor: "rgb(80, 64, 30)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#224622"
                  style={{ backgroundColor: "rgb(34, 70, 34)" }}
                />
              </li>
            </ul>
          </li>
          <li className={showVlueFun(5)}>
            <h5>Online electronics store</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-color="#d8ab2a"
                  style={{ backgroundColor: "rgb(216, 171, 42)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#e7b731"
                  style={{ backgroundColor: "rgb(231, 183, 49)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#cc9926"
                  style={{ backgroundColor: "rgb(204, 153, 38)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#1b140a"
                  style={{ backgroundColor: "rgb(27, 20, 10)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#875e32"
                  style={{ backgroundColor: "rgb(135, 94, 50)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ebc443"
                  style={{ backgroundColor: "rgb(235, 196, 67)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ac801d"
                  style={{ backgroundColor: "rgb(172, 128, 29)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#4e341b"
                  style={{ backgroundColor: "rgb(78, 52, 27)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#ac815e"
                  style={{ backgroundColor: "rgb(172, 129, 94)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#caa13d"
                  style={{ backgroundColor: "rgb(202, 161, 61)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#272027"
                  style={{ backgroundColor: "rgb(39, 32, 39)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#1d1419"
                  style={{ backgroundColor: "rgb(29, 20, 25)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#826583"
                  style={{ backgroundColor: "rgb(130, 101, 131)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#2f111b"
                  style={{ backgroundColor: "rgb(47, 17, 27)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#3e2137"
                  style={{ backgroundColor: "rgb(62, 33, 55)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#523e4a"
                  style={{ backgroundColor: "rgb(82, 62, 74)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#4d6895"
                  style={{ backgroundColor: "rgb(77, 104, 149)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#6ec9e4"
                  style={{ backgroundColor: "rgb(110, 201, 228)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#2d2f46"
                  style={{ backgroundColor: "rgb(45, 47, 70)" }}
                />
              </li>
              <li>
                <a
                  href="#"
                  data-color="#334867"
                  style={{ backgroundColor: "rgb(51, 72, 103)" }}
                />
              </li>
            </ul>
          </li>
        </ul>
        <div className="info">
          <div className="current">{showVlue}</div>
          <div className="separator">/</div>
          <div className="total">5</div>
        </div>
        <div className="my__nav">
          <a
            href="#"
            className="prev"
            onClick={() => setShowVlue(showVlue === 1 ? 5 : showVlue - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 492.004 492.004"
              style={{ enableBackground: "new 0 0 492.004 492.004" }}
              xmlSpace="preserve"
              className="fn__svg replaced-svg"
            >
              <g>
                <g>
                  <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
          <a
            href="#"
            className="next"
            onClick={() => setShowVlue(showVlue === 5 ? 1 : showVlue + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 492.004 492.004"
              style={{ enableBackground: "new 0 0 492.004 492.004" }}
              xmlSpace="preserve"
              className="fn__svg replaced-svg"
            >
              <g>
                <g>
                  <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColorScheme;
