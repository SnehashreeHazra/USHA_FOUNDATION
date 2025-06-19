import React from "react";
import logo from "../assets/USA New Logo 1 2.png";
import { useLocation, useNavigate } from "react-router-dom";
import featureStackIcon from '../assets/All feature stack 1.png'

const Header = () => {
  const location = useLocation();
  const isSocialOrCirclePage = location.pathname === "/social-feed" || location.pathname === "/messaging-section" || location.pathname === "/blog-section" || location.pathname === "/personal-profile" || location.pathname === "/video-preview";
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-top">
        <p>USHA - Universal Spiritual Human Awakening</p>
      </div>

      <div className="header-bottom">
        <div className="uni-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="logo">
              <img src={logo} alt="" /> <span>USHA FOUNDATION</span>
            </div>
            <div className="header-bottom-right">
              <div className="search-box">
                <input type="text" placeholder="Search Here" />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              {isSocialOrCirclePage ? (
                <img className="feature-stack-icon" src={featureStackIcon} alt="" />
              ) : (
                <>
                  <p className="about-us" onClick={()=>navigate("/about")}>About Us</p>
                  <button className="sign-in-btn" onClick={()=>navigate("/login")}>Sign In</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
