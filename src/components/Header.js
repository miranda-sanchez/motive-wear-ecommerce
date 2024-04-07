import React from "react";
import Nav from "./Nav";
import logo from "../img/Logo.PNG";

const Header = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="" />
      <Nav></Nav>
    </header>
  );
};

export default Header;
