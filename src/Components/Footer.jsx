import React from "react";
import "../Styles/footer.css";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div>
      <div className="logo-content">
        <img src={Logo} alt="" className="footer-logo" />
        <div className="icons">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Instagram} alt="" />
          
        </div>
      </div>
      
      <div className="footer-line"></div>

      <div className="footer-container">
        <div className="links">
          <div className="fot-card">
            <h2>Our Company</h2>
            <li>
              <a href="/#">HOW WE WORK</a>
            </li>
            <li>
              <a href="/#">WHY INSURE?</a>
            </li>
            <li>
              <a href="/#">CHECK PRICE</a>
            </li>
            <li>
              <a href="/#">REVIEWS</a>
            </li>
          </div>

          <div className="fot-card">
            <h2>Help Me</h2>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <a href="/#">TERMS OF USE</a>
            </li>
            <li>
              <a href="/#">COOKIES</a>
            </li>
          </div>

          <div className="fot-card">
            <h2>Contact</h2>
            <li>
              <a href="/#">SALES</a>
            </li>
            <li>
              <a href="/#">SUPPORT</a>
            </li>
            <li>
              <a href="/#">LIVE CHAT</a>
            </li>
          </div>

          <div className="fot-card">
            <h2>Others</h2>
            <li>
              <a href="/#">CAREERS</a>
            </li>
            <li>
              <a href="/#">PRESS</a>
            </li>
            <li>
              <a href="/#">LICESNSES</a>
            </li>
          </div>

          <div className="fot-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
