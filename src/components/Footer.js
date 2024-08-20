import React from "react";

const Footer = () => {
  return (
    <section className="Footer">
      <article>
        <ul className="socialmedia-footer">
          <li>
            <a
              href="https://www.linkedin.com/in/miranda--sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-linkedin"></div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/miranda-sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-github"></div>
            </a>
          </li>
        </ul>
      </article>

      <article className="footer-bottom">
        <p>2024 &copy; Miranda Sánchez</p>
      </article>
    </section>
  );
};

export default Footer;
