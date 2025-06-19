import React from "react";
import footerLogo from '../assets/USA New Logo 1 2.png'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="uni-container">
        <p className="have-gift">Have a Gift Code?</p>
        <button className="redeem-here-btn">Redeem Here</button>
        <div className="usha-dialogue-logo">
          <img src={footerLogo} alt="" />
          <div class="separator"></div>
          <p>
            USHA <br /> DIALOGUE
          </p>
        </div>
        <p className="uni-spiritual">UNIVERSAL SPIRITUAL HUMAN AWAKENING</p>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="uni-container footer-bottom-container">
        <p className="copyright">© 2025 USHA Dialogue. All Rights Reserved.</p>
        <div className="social-icons">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
