import React, { useEffect } from "react";
import "./VedicResearch.css";
import Footer from "../../Layout/Footer";
import yellowArrow from "../../assets/Group 194.png";
import videoImg from "../../assets/image 70.png";

const VedicResearch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="vedic-research">
        <div className="vedic-research-banner">
          <div className="uni-container about-container0">
            <p className="research-banner-text">bharat the vishwa guru</p>
            <p className="about-left-heading">
              USHA INSTITUTE OF VEDIC RESEARCH
            </p>
            <p className="about-banner-text">
              A global collaboration Platform for Vedic Research and Indology.
            </p>
          </div>
        </div>
        <div className="uni-container">
          <div className="research-body">
            <p>USHAAYATAN</p>
            <p>
              A Dharmic research campus to reawaken civilisation through
              Sanātana wisdom.
            </p>
            <div className="donate-now-btn">
              Know More About <span>USHAAYATAN</span>{" "}
              <img src={yellowArrow} alt="" />
            </div>
            <img className="research-video" src={videoImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VedicResearch;
