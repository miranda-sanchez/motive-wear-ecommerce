import React from "react";
import Polaroid from "../img/Polaroid.PNG";
import Circle from "../img/Circle.PNG";
import UnderlinedCurved from "../img/Underlined-curved.PNG";

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
        <img className="underlined-img" src={UnderlinedCurved} alt="" />
      </div>
      <figure>
        <img
          className="polaroid-img"
          src={Polaroid}
          alt="Polaroid selfie with the description 'my portfolio'"
        />
      </figure>
    </section>
  );
};

export default Hero;
