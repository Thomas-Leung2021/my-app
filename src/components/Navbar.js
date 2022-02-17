import React from "react";
import Logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={Logo} />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
