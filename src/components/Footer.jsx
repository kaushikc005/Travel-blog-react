import React from "react";
import "./cssutils/Footer.css";
import MyButton from "./MyButton";
const Footer = () => {
  return (
    <main className="footer-container">
      <article className="footer--wrapper">
        <p className="footer--heading">
          Join the adventure newsletter to receive our best vacation deals
        </p>
        <form>
          <input
            className="footer--form-email"
            type="email"
            placeholder="Your Email"
          />
          <MyButton btnStyle="btn--outline" btnSize="btn--medium" >
            Subscribe
          </MyButton>
        </form>

        <section className="footer--item--wrapper">
          <content className="footer--item-list">
            <p className="footer--item--heading">About Us</p>
            <ul>
              <li>How it works?</li>
              <li>Testimonials</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Terms of service</li>
            </ul>
          </content>

          <nav className="footer--item-list">
            <p className="footer--item--heading">Contact Us</p>
            <ul>
              <li>Contact</li>
              <li>Support</li>
              <li>Destination</li>
              <li>Support</li>
            </ul>
          </nav>

          <section className="footer--item-list">
            <p className="footer--item--heading">Videos</p>
            <ul>
              <li>Submit Videos</li>
              <li>Ambassador</li>
              <li>Agency</li>
              <li>Influencer</li>
              <li>Terms of service</li>
            </ul>
          </section>
        </section>

        <aside className="footer--icon-wrapper">
          <p className="footer--icon">
            TRVL <i className="fa-brands fa-typo3"></i>
          </p>
          <span className="footer--icon small-text">TRVL @2023</span>

          <nav className="footer--icon-social">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </nav>
        </aside>
      </article>
    </main>
  );
};

export default Footer;
