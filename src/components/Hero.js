import React from "react";
import Polaroid from "../img/Polaroid.PNG";
import Circle from "../img/Circle.PNG";

const Hero = () => {
  return (
    <section className="hero">
      <div className="title">
        <h1>
          I'm a <strong>Front-end Developer</strong> &{"\n"}
          <strong>English-Spanish Translator</strong> & {"\n"}
          <strong>Digital Artist</strong>
        </h1>
        <img className="circle-img" src={Circle} alt="" />
      </div>
      <figure>
        <img
          src={Polaroid}
          alt="Polaroid selfie with the description 'my portfolio'"
        />
      </figure>
    </section>
  );
};

export default Hero;
