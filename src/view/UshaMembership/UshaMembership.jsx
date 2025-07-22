import React, { useEffect } from "react";
import "./UshaMembership.css";
import yellowArrow from "../../assets/Group 194.png";
import originalIcon from "../../assets/OTT & live Icon 8 2.png";
import marketIcon from "../../assets/Marketplace 1.png";
import socialIcon from "../../assets/Feed_ 1 1.png";
import ushaReseachIcon from "../../assets/Research 5.png";
import insightsIcon from "../../assets/Blogging 1.png";
import gurukulIcon from "../../assets/Learning 6.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";

const UshaMembership = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="usha-membership">
      <div className="donation-banner">
        <div className="uni-container about-container0">
          <div className="mission-why-usha-btn">
            <span onClick={() => navigate("/usha-donate")}>Donate</span>{" "}
            <span className="active">Membership</span>
          </div>
          <p className="donate-for-our">Choose Your</p>
          <p className="invisible-heading">PATH TO AWAKENING</p>
        </div>
      </div>
      <div className="uni-container">
        <div className="mission-types">
          <div className="usha-ins-topics">
            <img src={socialIcon} alt="" /> <p>Social Feed</p>
          </div>
          <div className="usha-ins-topics">
            <img src={originalIcon} alt="" /> <p>Originals</p>
          </div>
          <div className="usha-ins-topics">
            <img src={insightsIcon} alt="" /> <p>Blog</p>
          </div>
          <div className="usha-ins-topics">
            <img src={marketIcon} alt="" /> <p>Market</p>
          </div>
          <div className="usha-ins-topics">
            <img src={gurukulIcon} alt="" /> <p>Gurukul</p>
          </div>
          <div className="usha-ins-topics">
            <img src={ushaReseachIcon} alt="" /> <p>Research</p>
          </div>
        </div>
        <p className="mission-body-text">
          Whether you're just beginning or deepening your journey, there's a
          space for you. Every soul travels at its own pace. Let USHA walk with
          you.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default UshaMembership;
