import Link from 'next/link';

const About = () => {
  return (
    <section className="about" id="about">
      {/* About Modern Shortcode */}
      <div className="fn_cs_about_modern">
        <div className="container">
          <div className="row">
            <div className="left_part">
              <div className="left_in" id="scene">
                <div className="layer border" data-depth="0.2">
                  <span className="span1" />
                  <span className="span2" />
                  <img src="img/thumb/450-550.jpg" alt="image" />
                </div>
                <div className="img_holder layer" data-depth="0.3">
                  <img src="img/thumb/450-550.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/about.jpeg" />
                </div>
                <div
                  className="dots layer"
                  data-switch="disable"
                  data-depth="0.4"
                ></div>
              </div>
            </div>
            <div className="right_part">
              {/* Main Title */}
              <div className="main_title">
                <h3>Ford Henley</h3>
                <p>
                  Founder of{" "}
                  <Link href="https://frenify.com/"><a                    
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frenify
                  </a></Link>
                  . Professional UI/UX designer and web developer based on
                  London. Sometimes works as a freelancer.
                </p>
              </div>
              {/* /Main Title */}
            </div>
          </div>
        </div>
      </div>
      {/* About Modern Shortcode */}
    </section>
  );
};

export default About;
