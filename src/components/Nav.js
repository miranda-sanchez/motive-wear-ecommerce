import React, { useState } from "react";
import underlined from "../img/Underlined-double.PNG";
import { Link } from "react-router-dom";
import burgerIcon from "../img/Burger-icon.PNG";
import crossIcon from "../img/Cross-icon.PNG";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <button
        className="mobile-nav-toggle-btn"
        aria-controls="primary-navigation"
        aria-expanded={isNavOpen}
        onClick={handleToggleNav}
        style={{
          backgroundImage: `url(${isNavOpen ? crossIcon : burgerIcon})`,
        }}
      >
        <span className="sr-only">Menu</span>
      </button>

      <ul
        id="primary-navigation"
        className={`primary-navigation ${isNavOpen ? "open" : ""}`}
      >
        <Link exact to="/">
          <li className="active">
            Home
            <img src={underlined} alt="" className="img-hover-underlined" />
          </li>
        </Link>
        <a href="#about">
          <li className="active">
            About
            <img src={underlined} alt="" className="img-hover-underlined" />
          </li>
        </a>
        <li className="active">
          Projects
          <img src={underlined} alt="" className="img-hover-underlined" />
        </li>
        <Link to="/contact">
          <li className="active">
            Contact
            <img src={underlined} alt="" className="img-hover-underlined" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
