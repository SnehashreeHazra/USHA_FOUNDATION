import React, { useEffect } from "react";
import "./VedicResearch.css";
import Footer from "../../Layout/Footer";
import yellowArrow from "../../assets/Group 194.png";
import videoImg from "../../assets/image 70.png";
import aiImg from "../../assets/Group 217.png";
import prevBtn from "../../assets/Polygon 2.png";
import nextBtn from "../../assets/Polygon 1.png";
import successStoryImg from "../../assets/Group 218.png";
import whiteArrow from "../../assets/Arrow 42.png";
import viewMoreBtn from "../../assets/Group 219.png";
import researchAreaImg1 from "../../assets/image 94.png";
import researchAreaImg2 from "../../assets/image 92.png";
import researchAreaImg3 from "../../assets/image 110.png";
import researchAreaImg4 from "../../assets/image 111.png";
import partnerImg1 from "../../assets/dummy-logo-5b 1.png";
import partnerImg2 from "../../assets/aven 1.png";
import partnerImg3 from "../../assets/amara 1.png";
import partnerImg4 from "../../assets/image 108.png";
import userLogo from "../../assets/User Icon 5.png";
import { useNavigate } from "react-router-dom";

const VedicResearch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
              <span className="active">Research</span>{" "}
              <span onClick={() => navigate("/research-projects")}>
                Projects
              </span>
            </div>
            <p className="research-areas-heading">Research Areas</p>
            <div className="research-divs-container">
              <div className="research-area-div">
                <img
                  className="research-area-div-img"
                  src={researchAreaImg1}
                  alt=""
                />
                <div className="research-area-div-content">
                  <div className="research-area-div-content1">
                    <p className="research-title">
                      Vedic Vedic Texts and <span>Sanskrit Philosophy</span>
                    </p>
                    <button className="research-div-join-btn">Join</button>
                  </div>
                  <p className="research-description">
                    Discover the depth of Sanskrit thought and ancient Vedic
                    scriptures. Join us to preserve, learn, and share timeless
                    Indian philosophy.
                  </p>
                  <button className="research-area-know-more">
                    Know More <img src={whiteArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="research-area-div">
                <img
                  className="research-area-div-img"
                  src={researchAreaImg2}
                  alt=""
                />
                <div className="research-area-div-content">
                  <div className="research-area-div-content1">
                    <p className="research-title">
                      Vedic Vedic Texts and <span>Sanskrit Philosophy</span>
                    </p>
                    <button className="research-div-join-btn">Join</button>
                  </div>
                  <p className="research-description">
                    Discover the depth of Sanskrit thought and ancient Vedic
                    scriptures. Join us to preserve, learn, and share timeless
                    Indian philosophy.
                  </p>
                  <button className="research-area-know-more">
                    Know More <img src={whiteArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="research-area-div">
                <img
                  className="research-area-div-img"
                  src={researchAreaImg3}
                  alt=""
                />
                <div className="research-area-div-content">
                  <div className="research-area-div-content1">
                    <p className="research-title">
                      Vedic Vedic Texts and <span>Sanskrit Philosophy</span>
                    </p>
                    <button className="research-div-join-btn">Join</button>
                  </div>
                  <p className="research-description">
                    Discover the depth of Sanskrit thought and ancient Vedic
                    scriptures. Join us to preserve, learn, and share timeless
                    Indian philosophy.
                  </p>
                  <button className="research-area-know-more">
                    Know More <img src={whiteArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="research-area-div">
                <img
                  className="research-area-div-img"
                  src={researchAreaImg4}
                  alt=""
                />
                <div className="research-area-div-content">
                  <div className="research-area-div-content1">
                    <p className="research-title">
                      Vedic Vedic Texts and <span>Sanskrit Philosophy</span>
                    </p>
                    <button className="research-div-join-btn">Join</button>
                  </div>
                  <p className="research-description">
                    Discover the depth of Sanskrit thought and ancient Vedic
                    scriptures. Join us to preserve, learn, and share timeless
                    Indian philosophy.
                  </p>
                  <button className="research-area-know-more">
                    Know More <img src={whiteArrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <button className="research-view-more">
              View More
              <img src={viewMoreBtn} alt="" />
            </button>
          </div>
          <div className="success-stories">
            <img src={prevBtn} alt="" />
            <div className="success-story-div">
              <div className="success-story-div-content">
                <p className="success-heading">Success Stories</p>
                <p className="success-story-description">
                  A researcher's deep dive into Indology and Hinduism revived
                  ancient wisdom, bridging tradition and modernity, inspiring
                  global academic and spiritual dialogues. His groundbreaking
                  work decoded sacred texts, unearthed lost rituals, and
                  fostered interfaith harmony, gaining recognition across
                  universities, temples, and cultural forums.
                </p>
                <button className="success-know-more">
                  Know More <img src={whiteArrow} alt="" />
                </button>
              </div>
              <img className="krisna-img" src={successStoryImg} alt="" />
            </div>
            <img src={nextBtn} alt="" />
          </div>

          <div className="partners">
            <p className="research-areas-heading">Partners</p>
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

          <div className="partners">
            <p className="research-areas-heading">USHA Think Tank</p>
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

export default VedicResearch;
