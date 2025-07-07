import React from "react";
import brownArrow from "../assets/Group 190.png";
import youtubeImg from "../assets/Group 189.png";
import ushaLogo from "../assets/USA New Logo 1 2.png";

const Footer = () => {
  return (
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
  );
};

export default Footer;
