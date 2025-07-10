import React from "react";
import brownArrow from "../assets/Group 190.png";
import youtubeImg from "../assets/Group 189.png";
import ushaLogo from "../assets/USA New Logo 2.png";
// import footerFacebook from ""

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="uni-container footer-container">
          <div className="footer-left">
            <p className="usha-foundation-heading">
              USHA <span>FOUNDATION</span>
            </p>
            <div className="footer-left-separator"></div>
            <p className="usha-spiritual-foundation">
              UNIVERSAL SPIRITUAL HUMAN AWAKENING
            </p>
          </div>
          <div className="footer-middle">
            <img src={ushaLogo} alt="" />
            <p>
              Want to <span>Donate?</span>
            </p>
            <button className="footer-middle-btn">Click Here</button>
          </div>
          <div className="footer-right">
            <p className="footer-subscribe">Subscribe</p>
            <img className="youtube-img" src={youtubeImg} alt="" />
            <p className="join-family">Join our Worldfamily.</p>
            <p style={{ fontSize: "13px" }}>
              Subscribe to our YouTube and social media handles for free for all
              updates.
            </p>
            <button className="footer-right-btn">
              <span>Subscribe Here</span> <img src={brownArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="uni-container">
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 USHA Dialogue & Pinaki Gangopadhyay. All Rights Reserved.
          </p>
          <div className="footer-social-icons">
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
