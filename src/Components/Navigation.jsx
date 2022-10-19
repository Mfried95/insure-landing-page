import React from "react";
import "../Styles/navigation.css";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg"
import {useRef} from "react";

function Navigation() {

const navRef = useRef();

const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav")
}

  return (
    <header>
        <img src={Logo} alt="" />

        <nav ref={navRef}>
            <a href="/#">How we work</a>
            <a href="/#">Blog</a>
            <a href="/#">Account</a>
            <a href="/#" className="plan-btn">View Plans</a>

            <div className="nav-btn nav-close-btn" onClick={showNavbar}>
                <img src={Hamburger} alt="" />
            </div>
        </nav>

        <div className="nav-btn" onClick={showNavbar}>
                <img src={Hamburger} alt="" />
        </div>
        
    </header>
  );
}

export default Navigation;
