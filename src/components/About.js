import React from "react";
import AboutMe from "../img/About.PNG";

const About = () => {
  return (
    <section className="About">
      <h2 className="sr-only">About me </h2>
      <img className="about-img" src={AboutMe} alt="" />
      <article className="about-text">
        <p>
          I'm an advanced <strong> English-Spanish Translation</strong> student
          specialized in <strong>legal and financial translation</strong> at the
          University of Buenos Aires.
        </p>
        <p>
          I'm a <strong>Computer Science</strong> student who focuses on
          Front-end development and UX design.
        </p>
      </article>
    </section>
  );
};

export default About;
