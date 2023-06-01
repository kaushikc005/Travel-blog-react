import React from "react";
import "./cssutils/HeroSection.css";
import MyButton from "./MyButton";

const HeroSection = () => {
  return (
    <article className="hero--container">
      <section className="hero-wrapper">
        <p className="hero--heading">ADVENTURE AWAITS</p>
        <br />
        <p className="hero--subText">What are you waiting for?</p>

        <nav className="hero--btns">
          <MyButton btnStyle="btn--outline" btnSize="btn--medium">
            GET STARTED{" "}
          </MyButton>
          <MyButton btnStyle="btn--primary" btnSize="btn--medium">
            WATCH TRAILER <i class="fa-sharp fa-regular fa-circle-play"></i>
          </MyButton>
        </nav>
      </section>
    </article>
  );
};

export default HeroSection;
