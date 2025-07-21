import React, { useEffect } from "react";
import "./UshaMembership.css";
import yellowArrow from "../../assets/Group 194.png";
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
          <p className="donate-for-our">Donate for Our</p>
          <p className="invisible-heading">INVISIBLE INHERITANCE</p>
        </div>
      </div>
      <div className="uni-container"></div>
      <Footer />
    </div>
  );
};

export default UshaMembership;
