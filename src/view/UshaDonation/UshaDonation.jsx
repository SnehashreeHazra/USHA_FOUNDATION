import React, { useEffect } from "react";
import "./UshaDonation.css";
import yellowArrow from "../../assets/Group 194.png";
import viewMoreBtn from "../../assets/Group 219.png";
import partnerImg1 from "../../assets/dummy-logo-5b 1.png";
import partnerImg2 from "../../assets/aven 1.png";
import partnerImg3 from "../../assets/amara 1.png";
import partnerImg4 from "../../assets/image 108.png";
import userLogo from "../../assets/User Icon 5.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";

const UshaDonation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="usha-donation">
      <div className="donation-banner">
        <div className="uni-container about-container0">
          <div className="mission-why-usha-btn">
            <span onClick={() => navigate("/usha-mission")}>Donate</span>{" "}
            <span className="active">Membership</span>
          </div>
          <p className="donate-for-our">Donate for Our</p>
          <p className="invisible-heading">INVISIBLE INHERITANCE</p>
        </div>
      </div>
      <div className="uni-container">
        <div className="partners">
          <p className="research-areas-heading1">Our Top Donors</p>
          <div className="think-tank-container">
            <div className="think-tank">
              <div className="think-tank-div-content">
                <p className="researcher-name">
                  Anish <span>Maheshbabu</span>
                </p>
                <p>Vedic Researcher</p>
                <div className="researcher-profile">
                  <img src={userLogo} alt="" />
                  <span>Visit Profile</span>
                </div>
              </div>
            </div>
            <div className="think-tank">
              <div className="think-tank-div-content">
                <p className="researcher-name">
                  Anish <span>Maheshbabu</span>
                </p>
                <p>Vedic Researcher</p>
                <div className="researcher-profile">
                  <img src={userLogo} alt="" />
                  <span>Visit Profile</span>
                </div>
              </div>
            </div>
            <div className="think-tank">
              <div className="think-tank-div-content">
                <p className="researcher-name">
                  Anish <span>Maheshbabu</span>
                </p>
                <p>Vedic Researcher</p>
                <div className="researcher-profile">
                  <img src={userLogo} alt="" />
                  <span>Visit Profile</span>
                </div>
              </div>
            </div>
            <div className="think-tank">
              <div className="think-tank-div-content">
                <p className="researcher-name">
                  Anish <span>Maheshbabu</span>
                </p>
                <p>Vedic Researcher</p>
                <div className="researcher-profile">
                  <img src={userLogo} alt="" />
                  <span>Visit Profile</span>
                </div>
              </div>
            </div>
          </div>
          <button className="research-view-more">
            View More
            <img src={viewMoreBtn} alt="" />
          </button>
        </div>
        <div className="partners">
          <p className="research-areas-heading1">Our Chief Patrons</p>
          <div className="partners-div">
            <img src={partnerImg1} alt="" />
            <img src={partnerImg2} alt="" />
            <img src={partnerImg3} alt="" />
            <img src={partnerImg4} alt="" />
            <img src={partnerImg4} alt="" />
            <img src={partnerImg3} alt="" />
            <img src={partnerImg2} alt="" />
            <img src={partnerImg1} alt="" />
          </div>
          <button className="research-view-more">
            View More
            <img src={viewMoreBtn} alt="" />
          </button>
        </div>
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

export default UshaDonation;
