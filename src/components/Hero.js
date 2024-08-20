import React, { useEffect } from "react";
import Rellax from "rellax";
import doodle1 from "../img/doodle1.png";
import doodle2 from "../img/doodle2.png";
import doodleHeart1 from "../img/doodle-heart1.png";
import doodleHeart2 from "../img/doodle-heart2.png";

const Hero = () => {
  useEffect(() => {
    const rellax1 = new Rellax(".rellax1", {
      speed: -3,
    });

    const rellax2 = new Rellax(".rellax2", {
      speed: -4,
    });

    const rellax3 = new Rellax(".rellax3", {
      speed: -2,
    });

    const rellax4 = new Rellax(".rellax4", {
      speed: -6,
    });

    return () => {
      rellax1.destroy();
      rellax2.destroy();
      rellax3.destroy();
      rellax4.destroy();
    };
  }, []);

  return (
    <section className="Hero">
      <h1>Motive Wear</h1>
      <figure>
        <img className="rellax1 doodle-bottom" src={doodle1} alt="Doodle" />
        <img className="rellax2 doodle-top" src={doodle2} alt="Doodle" />
        <img
          className="rellax3 heart-bottom"
          src={doodleHeart1}
          alt="Heart-shaped doodle"
        />
        <img
          className="rellax4 heart-top"
          src={doodleHeart2}
          alt="Heart-shaped doodle"
        />
      </figure>
    </section>
  );
};

export default Hero;
