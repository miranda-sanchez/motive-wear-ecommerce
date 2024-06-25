import React from "react";
import HTML from "../img/LogoHTML.png";
import CSS from "../img/LogoCSS.png";
import Js from "../img/LogoJs.png";
import ReactJs from "../img/LogoReact.png";
import LESS from "../img/LogoLESS.png";
import SASS from "../img/LogoSASS.png";
import Git from "../img/LogoGit.png";

const Skills = () => {
  return (
    <section className="Skills">
      <div className="skills-content">
        <h2>Programming</h2>
        <article className="skills-container">
          <div>
            <img src={HTML} alt="HTML5 logo" />
            <span>HTML5</span>
          </div>
          <div>
            <img src={CSS} alt="CSS3 logo" />
            <span>CSS3</span>
          </div>
          <div>
            <img src={Js} alt="JavaScript logo" />
            <span>JavaScript</span>
          </div>
          <div>
            <img src={ReactJs} alt="ReactJs logo" />
            <span>ReactJs</span>
          </div>
          <div>
            <img src={SASS} alt="SASS logo" />
            <span>SASS</span>
          </div>
          <div>
            <img src={LESS} alt="LESS logo" />
            <span>LESS</span>
          </div>
          <div>
            <img src={Git} alt="Git logo" />
            <span>Git</span>
          </div>
        </article>
        <h2>Design</h2>
        <article className="skills-container">
          <div>
            <span>Photoshop</span>
          </div>
          <div>
            <span>Illustrator</span>
          </div>
          <div>
            <span>Figma</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
