import React, { useEffect } from "react";
import "./UshaDonation.css";
import yellowArrow from "../../assets/Group 194.png";
import viewMoreBtn from "../../assets/Group 219.png";
import partnerImg1 from "../../assets/dummy-logo-5b 1.png";
import partnerImg2 from "../../assets/aven 1.png";
import partnerImg3 from "../../assets/amara 1.png";
import partnerImg4 from "../../assets/image 108.png";
import userLogo from "../../assets/User Icon 5.png";
import originalIcon from "../../assets/OTT & live Icon 8 2.png";
import marketIcon from "../../assets/Marketplace 1.png";
import socialIcon from "../../assets/Feed_ 1 1.png";
import ushaReseachIcon from "../../assets/Research 5.png";
import insightsIcon from "../../assets/Blogging 1.png";
import gurukulIcon from "../../assets/Learning 6.png";
import donateCard1 from "../../assets/image 94.png";
import donateCard2 from "../../assets/image 92.png";
import donateBtn from "../../assets/Group 223.png";
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
            <span className="active">Donate</span>{" "}
            <span onClick={() => navigate("/usha-membership")}>Membership</span>
          </div>
          <p className="donate-for-our">Donate for Our</p>
          <p className="invisible-heading">INVISIBLE INHERITANCE</p>
        </div>
      </div>
      <div className="uni-container">
        <p>
          With your generous donation, enjoy full access to USHA's premium
          offerings . Your support empowers the preservation and propagation of
          India's timeless wisdom.
        </p>
        <div className="usha-institute-div1">
          <div className="usha-institute-div-heading1">
            <p>Enjoy Full Access</p>
          </div>
          <div className="usha-ins-body1">
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
          <p className="usha-ins-desc" style={{ paddingBottom: "30px" }}>
            Including exclusive research content, curated spiritual resources,
            and early invitations to all our events
          </p>
        </div>
        <div className="donation-cards-wrapper">
          <div className="donation-card">
            <img className="donate-card-img" src={donateCard1} alt="" />
            <div className="donate-card-body">
              <p className="donate-card-heading">
                Donate to uphold
                <span> Sanatan Dharma & Content Development</span>
              </p>
              <p className="donate-card-desc">
                Support spiritual education, sacred texts, and rich cultural
                content that preserves and promotes Sanatan Dharma for future
                generations. Donate generously.
              </p>
              <button className="donate-card-btn">
                Donate Now!
                <img src={donateBtn} alt="" />
              </button>
            </div>
          </div>
          <div className="donation-card">
            <img className="donate-card-img" src={donateCard2} alt="" />
            <div className="donate-card-body">
              <p className="donate-card-heading">
                Donate for
                <span> Vedic Research</span>
              </p>
              <p className="donate-card-desc">
                Empower the rediscovery of ancient wisdom through Vedic research. Your donation fuels knowledge, preservation, and spiritual awakening across generations.
              </p>
              <button className="donate-card-btn">
                Donate Now!
                <img src={donateBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
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
