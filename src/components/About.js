import React from "react";
import AboutMe from "../img/About.PNG";

const About = () => {
  return (
    <section className="About" id="about">
      <h2 className="sr-only">About me </h2>
      <article className="about-title">
        <img className="about-img" src={AboutMe} alt="" />
      </article>
      <article className="about-text">
        <p>
          I'm currently pursuing a 5-year graduate degree in{" "}
          <strong>English-Spanish Translation</strong> at the University of
          Buenos Aires. I specialize in legal, economic, medical, and IT texts.
          I am graduating on December 2024.
        </p>
        <p>
          I'm also pursuing a 5-year{" "}
          <strong>graduate degree in Computer Science</strong>, and I'm
          passionate about <strong>front-end development</strong> and{" "}
          <strong>UX design</strong>. I enjoy creating visually appealing and
          unique interfaces by embedding the illustrations I make myself into
          the code.
        </p>
      </article>
    </section>
  );
};

export default About;
