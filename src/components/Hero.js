import React from "react";
import CVPhoto from "../img/CV-photo.PNG";

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        I'm an English-Spanish translator, front-end developer, and artist
      </h1>
      <figure>
        <img src={CVPhoto} alt="" />
      </figure>
    </section>
  );
};

export default Hero;
