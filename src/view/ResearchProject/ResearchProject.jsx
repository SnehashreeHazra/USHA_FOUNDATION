import React from "react";
import "./ResearchProject.css";
import yellowArrow from "../../assets/Group 194.png";
import videoImg from "../../assets/image 70.png";
import aiImg from "../../assets/Group 217.png";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const ResearchProject = () => {
  const navigate = useNavigate();
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
            <p className="body-ushaayatan">USHAAYATAN</p>
            <p className="body-subheading">
              A Dharmic research campus to reawaken civilisation through
              Sanātana wisdom.
            </p>
            <div className="donate-now-btn">
              Know More About <span>USHAAYATAN</span>{" "}
              <img src={yellowArrow} alt="" />
            </div>
            <img className="research-video" src={videoImg} alt="" />
            <p className="ask-usha-heading">ASK USHA</p>
            <div class="ask-usha-btn">
              <div class="ask-usha-inner">
                <img src={aiImg} alt="AI" />
                <span>Ask USHA</span>
              </div>
            </div>
            <p className="usha-body-text">
              Ask USHA is the platform’s GenAI-powered engine that leverages
              cutting-edge Large Language Models (LLMs) trained on curated Vedic
              texts, commentaries, and cross-cultural knowledge frameworks. It
              is designed to intelligently find, decode, and reinterpret ancient
              Sanskrit ślokas, philosophical concepts, rituals, and cosmological
              insights—making them accessible, contextual, and applicable for
              today’s seeker. By integrating semantic search, multilingual
              understanding, and dialogue-based exploration, Ask USHA acts as a
              personalised dhārmic guide, enabling users to ask profound
              questions and receive nuanced, scripturally grounded
              responses—bridging 5,000 years of civilisational wisdom with the
              intelligence of tomorrow. It is a living interface between ancient
              consciousness and modern curiosity.
            </p>
          </div>
          <div className="research-areas">
            <div className="mission-why-usha-btn">
              <span onClick={() => navigate("/vedic-research")}>Research</span>{" "}
              <span className="active">Projects</span>
            </div>
            <p className="research-areas-heading">Projects</p>
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
      </div>
      <Footer />
    </>
  );
};

export default ResearchProject;
