import React from "react";
import Nav from "./Nav";
import logo from "../img/Logo.PNG";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img id="logo" src={logo} alt="" />
      </Link>
      <Nav></Nav>
    </header>
  );
};

export default Header;
