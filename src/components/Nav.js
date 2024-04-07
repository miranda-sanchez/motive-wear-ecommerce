import React from "react";
import underlined from "../img/Underlined-double.PNG";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul id="primary-navigation" className="primary-navigation flex">
        <li className="active">
          <a href="#">About</a>
          <img src={underlined} alt="" className="img-hover-underlined" />
        </li>
        <li className="active">
          <a href="#">Projects</a>
          <img src={underlined} alt="" className="img-hover-underlined" />
        </li>
        <li className="active">
          <Link to="/contact">Contact</Link>
          <img src={underlined} alt="" className="img-hover-underlined" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
