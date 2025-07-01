import React from "react";
import "./LandingPage.css";
import LandingBanner from "./LandingBanner";
import placeEveryone from "../../assets/Group 180.png";
import yellowArrow from "../../assets/Group 181.png";

const LandingPage = () => {
  return (
    <div>
      <LandingBanner />
      <div className="place-for-everyone">
        <div className="uni-container place-for-every-container">
          <div className="place-for-everyone-left">
            <p className="place-everyone-heading">The ONE PLACE FOR EVERYONE</p>
            <p className="place-everyone-text">
              USHA is the dawn, the usher of new light and hope. Ushaism
              doctrine will be a consciousness raiser, based on science, reason,
              and spirituality. It's a platform for free thinkers, atheist and
              theists to learn, engage in dialogues, develop an unbiased
              understanding of reality and create a common future for humanity.
            </p>
            <div className="banner-about-us-btn">
              <span>Sign up now!</span>
              <img src={yellowArrow} alt="" />
            </div>
          </div>
          <div className="place-for-everyone-right">
            <img src={placeEveryone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
