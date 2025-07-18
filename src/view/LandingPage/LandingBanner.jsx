import React from "react";
import yellowArrow from "../../assets/Group 205.png";

const LandingBanner = () => {
  return (
    <div className="landing-banner">
      <div className="uni-container">
        <div className="landing-banner-text">
          <p className="landing-banner-heading">THE POWER OF ONE</p>
          <p className="landing-banner-subheading">THE ONE PLACE FOR EVERYONE</p>
          <div className="banner-about-us-btn">
            <span>About Us!</span>
            <img src={yellowArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
