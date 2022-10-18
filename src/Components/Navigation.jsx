import React from "react";
import "../Styles/navigation.css";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";

function Navigation() {
  return (
    <>
      <nav>
        <img className="Logo" src={Logo} alt="logo" />

        <div className="hamburger-mobile">
          <img src={Hamburger} alt="hamburger menu" />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
