import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="Footer">
      <article>
        <ul className="socialmedia-footer">
          <Link to="https://www.linkedin.com/in/miranda--sanchez">
            <li>
              <div className="icon-linkedin"></div>
            </li>
          </Link>
          <Link to="https://github.com/miranda-sanchez">
            <li>
              <div className="icon-github"></div>
            </li>
          </Link>
        </ul>
      </article>

      <article className="footer-botom">
        <p>2024 &copy; Miranda Sánchez</p>
      </article>
    </section>
  );
};

export default Footer;
