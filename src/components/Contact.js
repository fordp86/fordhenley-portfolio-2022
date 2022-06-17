import React from "react";
import { useState } from "react";
import Link from "next/link";


const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, phone, msg } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    if (email && name && phone && msg) {
      console.log("Ok");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <section className="contact" id="contact">
      {/* Main Title */}
      <div className="main_title center">
        <div className="container max880">
          <h3>Contact</h3>
        </div>
      </div>
      {/* /Main Title */}
      {/* Contact */}
      <div className="rewall_fn_contact">
        <div className="container max880">
          {/* Contact Form */}
          <form netlify data-netlify="true" className="contact_form" onSubmit={(e) => onSubmit(e)}>
            <div
              className="success"
              data-success="Your message has been received, we will contact you soon."
            />
            <div
              className="empty_notice"
              style={{ display: error ? "block" : "none" }}
            >
              <span>Please Fill Required Fields!</span>
            </div>
            <div className="items_wrap">
              <div className="items">
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "name" || name ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("name")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={name}
                      name="name"
                      id="name"
                      type="text"
                    />
                    <span className="moving_placeholder">Name *</span>
                  </div>
                </div>
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "email" || email ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("email")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={email}
                      name="email"
                      id="email"
                      type="email"
                    />
                    <span className="moving_placeholder">Email *</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "phone" || phone ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("phone")}
                      onBlur={() => setActive(null)}
                      id="phone"
                      onChange={(e) => onChange(e)}
                      value={phone}
                      name="phone"
                      type="phone"
                    />
                    <span className="moving_placeholder">Phone</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "message" || msg ? "active" : ""
                    }`}
                  >
                    <textarea
                      onFocus={() => setActive("message")}
                      onBlur={() => setActive(null)}
                      name="msg"
                      onChange={(e) => onChange(e)}
                      value={msg}
                      id="message"
                    />
                    <span className="moving_placeholder">Message</span>
                  </div>
                </div>
                <div className="item">
                  <input type="hidden" name="ontact_form" value="contact_form" />
                  <input type="submit" id="send_message" value="Send Message" />
                </div>
              </div>
            </div>
          </form>
          {/* /Contact Form */}
          {/* Contact Info */}
          <div className="fn_cs_contact_info">
            <p>
              <Link href="mailto:fordp86@gmail.com"><a className="fn__link">
              fordp86<span>@</span>gmail.com
              </a></Link>
            </p>
          </div>
          {/* /Contact Info */}
        </div>
      </div>
      {/* /Contact */}
    </section>
  );
};

export default Contact;
