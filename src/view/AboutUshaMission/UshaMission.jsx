import React from "react";
import "./UshaMission.css";
import yellowArrow from "../../assets/Group 194.png";
import yellowArrow2 from "../../assets/Group 196.png";
import rigvedaImg from "../../assets/Group 195.png";
import preyerImg from "../../assets/Group 197.png";
import brownArrow from "../../assets/Group 190.png";
import ushaLogo from "../../assets/USA New Logo 2.png";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const UshaMission = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <div className="about-banner">
        <div className="uni-container about-container0">
          <p className="about-left-heading">the power of one</p>
          <p className="about-left-subheading">the one place for everyone</p>
          <p className="about-banner-text">
            USHA – Universal Spiritual Human Awakening is a civilisational
            movement rooted in Vedic thought and cosmic consciousness. It is a
            response to the growing fragmentation of identity, faith, and
            society—a call to reconnect with universal principles that transcend
            time, geography, and doctrine. USHA aims to awaken a new global
            order anchored in spiritual harmony, knowledge equity, and Dhārmic
            living.
          </p>
          <p className="about-banner-text">
            At its core, USHA is not a religion, but a revival—a restoration of
            ṛta, the cosmic order. A conscious civilisation built on truth,
            reason, and oneness.
          </p>
        </div>
      </div>

      <div
        className="uni-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="join-awakening">Join the awakening. Be the light.</p>
        <button className="join-awakening-btn">
          <span>Join Our Movement</span> <img src={yellowArrow2} alt="" />
        </button>
        <div className="mission-why-usha-btn">
          <span className="active">Mission</span>{" "}
          <span onClick={() => navigate("/about")}>Why USHA</span>
        </div>
        <p className="mission-heading">Mission</p>
        <p className="call-to-wholeness" style={{marginTop:'0px'}}>RISE</p>
        <p className="call-to-wholeness-subheading">
          reawaken, integrate, strengthen, establish
        </p>

        <button className="join-awakening-btn">
          <span>Join Our Movement</span> <img src={brownArrow} alt="" />
        </button>

        <p className="quarry-form-heading">For any quarry or collaboration</p>
        <form className="quarry-form">
          <div className="about-form-group">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email address" />
          </div>
          <div className="about-form-group">
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Language" />
          </div>
          <button className="quarry-form-btn">
            <span>Contact Now!</span>
            <img src={yellowArrow} alt="" />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UshaMission;
