import React from "react";
import Polaroid from "../img/Polaroid.PNG";

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        I'm a <strong>Front-end Developer</strong> &{"\n"}
        <strong>English-Spanish Translator</strong> & {"\n"}
        <strong>Digital Artist</strong>
      </h1>
      <figure>
        <img src={Polaroid} alt="" />
      </figure>
    </section>
  );
};

export default Hero;
