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
          I'm currently studying <strong>English-Spanish Translation</strong>,
          specializing in <strong>legal and financial translation</strong> at
          the University of Buenos Aires. I focus on delivering accurate
          translations that meet the specific needs of legal and financial
          documents.
        </p>
        <p>
          I'm also pursuing a degree in <strong>Computer Science</strong>, with
          a keen interest in <strong>Front-end development</strong> and{" "}
          <strong>UX design</strong>. I enjoy creating user-friendly interfaces
          and digital experiences that are both visually appealing and intuitive
          to navigate.
        </p>
        <p>
          Outside of my studies, I'm always eager to learn and grow. I stay
          updated on industry trends and enjoy collaborating on projects that
          challenge me to expand my skills. My goal is to leverage my expertise
          in translation and technology to contribute meaningfully to both
          fields, making a positive impact through innovative solutions.
        </p>
      </article>
    </section>
  );
};

export default About;
