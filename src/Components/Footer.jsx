import React from 'react'
import "../Styles/footer.css"
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"

const Footer = () => {
  return (
    <div>
       <div className="footer-container">
            <div className="logo-content">
                <img src={Logo} alt="" />
                    <div className="icons">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Pinterest} alt="" />
                        <img src={Instagram} alt="" />
                        <div className="footer-line"></div>
                    </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer