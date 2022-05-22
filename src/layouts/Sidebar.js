import { Link } from "react-scroll";

const Sidebar = () => {
  const onClick = () => {
    document
      .querySelector(".rewall_fn_wrapper_all")
      .classList.toggle("sidebar-closed");
  };
  return (
    <div className="rewall_fn_sidebar" data-max={800} data-min={350}>
      {/* Sidebar: Close Button */}
      <button className="nav__button">
        <span className="icon">
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
        </span>
        <span className="width_indicator" onClick={() => onClick()} />
      </button>
      {/* /Sidebar: Close Button */}
      {/* Sidebar: Line */}
      <div className="nav_line" />
      {/* /Sidebar: Line */}
      {/* Sidebar: content */}
      <div className="sidebar_in">
        <div className="logo">
          <Link spy={true} smooth={true} activeClass="current" to="about">
            <img src="img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="navigation">
          <ul className="anchor_nav">
            <li>
              <Link spy={true} smooth={true} activeClass="current" to="about">
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                activeClass="current"
                to="biography"
              >
                Biography
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                activeClass="current"
                to="portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} activeClass="current" to="service">
                Services
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                activeClass="current"
                to="customer"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} activeClass="current" to="blog">
                News &amp; Tips
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} activeClass="current" to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <div className="social">
            <ul>
              <li>
                <a href="#">
                  <img
                    src="svg/social/twitter.svg"
                    alt="image"
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="svg/social/instagram.svg"
                    alt="image"
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="svg/social/youtube.svg"
                    alt="image"
                    className="fn__svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="desc">
            <p>
              © 2022 Ford Henley
            </p>
          </div>
        </div>
      </div>
      {/* Sidebar: content */}
    </div>
  );
};

export default Sidebar;
