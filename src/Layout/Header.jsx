import React from "react";
import logo from "../assets/USA New Logo 2.png";
import { useLocation, useNavigate } from "react-router-dom";
import aiLogo from "../assets/Group 165.png";
import featureStackIcon from "../assets/All feature stack 1.png";

const Header = () => {
  
  const location = useLocation();
  const isSocialOrCirclePage =
    location.pathname === "/social-feed" ||
    location.pathname === "/messaging-section" ||
    location.pathname === "/blog-section" ||
    location.pathname === "/personal-profile" ||
    location.pathname === "/video-preview";
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-top">
        <p className="header-top-text">
          USHA - Universal Spiritual Human Awakening
        </p>
      </div>

      <div className="header-bottom">
        <div className="uni-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="logo" onClick={()=>navigate('/')}>
              <img src={logo} alt="" /> <span>USHA</span>
            </div>
            <div className="header-bottom-right">
              <div className="ai-search-box">
                <img src={aiLogo} alt="" />
                <input type="text" placeholder="Ask USHA" />
              </div>
              {/* <div className="search-box">
                <input type="text" placeholder="Search Here" />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div> */}
              {/* {isSocialOrCirclePage ? (
                <img className="feature-stack-icon" src={featureStackIcon} alt="" />
              ) : ( */}

              <p className="about-us" onClick={() => navigate("/usha-stream")}>
                Vedic Knowledge
              </p>
              <p className="about-us" onClick={() => navigate("/vedic-research")}>
                Vedic Research
              </p>
              <p className="about-us" onClick={() => navigate("/about")}>
                About Us
              </p>
              <button
                className="sign-in-btn"
                onClick={() => navigate("/login")}
              >
                Join USHA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
