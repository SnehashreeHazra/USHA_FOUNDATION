import React, { useEffect } from "react";
import "./LandingPage.css";
import LandingBanner from "./LandingBanner";
import placeEveryone from "../../assets/Group 198.png";
import blackArrow from "../../assets/Group 206.png";
import ushaStream from "../../assets/Group 199.png";
import blueArrow from "../../assets/Group 190.png";
import ushaSparks from "../../assets/Group 200.png";
import ushaDialogue from "../../assets/Group 202.png";
import ushaInsights from "../../assets/Group 201.png";
import ushaSocial from "../../assets/Group 203.png";
import ushaAcademy from "../../assets/Group 204.png";
import LatestEvent from "./LatestEvent";
import Footer from "../../Layout/Footer";
import yellowArrow from "../../assets/Group 194.png";
import videoImg from "../../assets/image 70.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  },[])
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <LandingBanner />

      <div
        className="place-for-everyone"
        style={{
          background:
            "linear-gradient(to bottom,rgb(231, 79, 14) 25%, #ffa500 50%,  #ffffff 100%)",
        }}
      >
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
              <img src={blackArrow} alt="" />
            </div>
          </div>
          <div className="place-for-everyone-right">
            <img src={placeEveryone} alt="" />
          </div>
        </div>
        <div className="uni-container">
          <img className="landing-video" src={videoImg} alt="" />
        </div>
      </div>
      <div className="uni-container usha-stream">
        <div className="usha-stream-left">
          <img src={ushaStream} alt="" />
        </div>
        <div className="usha-stream-right">
          <p className="usha-stream-heading">USHA Stream</p>
          <p className="usha-stream-text">
            Watch timeless stories and civilisational insights come alive
            through original documentaries, series, and visual essays. Streaming
            Vedic wisdom for the modern seeker.
          </p>
          <div
            className="explore-original-btn"
            onClick={() => navigate("/usha-stream")}
          >
            <span>Explore Originals</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="uni-container usha-stream">
        <div className="usha-sparks-left">
          <p className="usha-stream-heading" style={{ textAlign: "left" }}>
            USHA Sparks
          </p>
          <p className="usha-stream-text" style={{ textAlign: "left" }}>
            Watch timeless stories and civilisational insights come alive
            through original documentaries, series, and visual essays. Streaming
            Vedic wisdom for the modern seeker.
          </p>
          <div
            className="explore-original-btn"
            onClick={() => navigate("/usha-sparks")}
          >
            <span>Ignite Your Mind</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
        <div className="usha-sparks-right">
          <img src={ushaSparks} alt="" />
        </div>
      </div>

      <div className="uni-container usha-stream">
        <div className="usha-stream-left">
          <img src={ushaInsights} alt="" />
        </div>
        <div className="usha-stream-right">
          <p className="usha-stream-heading">USHA Insights</p>
          <p className="usha-stream-text">
            Read transformative articles, decoded scriptures, and cross-cultural
            thought-pieces from modern Dhārmic thinkers. Ancient wisdom meets
            modern inquiry.
          </p>
          <div
            className="explore-original-btn"
            onClick={() => navigate("/usha-insights")}
          >
            <span>Explore Articles</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="uni-container usha-stream">
        <div className="usha-sparks-left">
          <p className="usha-stream-heading" style={{ textAlign: "left" }}>
            USHA Dialogue
          </p>
          <p className="usha-stream-text" style={{ textAlign: "left" }}>
            Listen to deep conversations, live sessions, and podcasts with
            seers, scholars, and spiritual explorers. Where questions find their
            voice.
          </p>
          <div
            className="explore-original-btn"
            onClick={() => navigate("/usha-dialogue")}
          >
            <span>Here the Voices</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
        <div className="usha-sparks-right">
          <img src={ushaDialogue} alt="" />
        </div>
      </div>

      <div className="uni-container usha-stream">
        <div className="usha-stream-left">
          <img src={ushaSocial} alt="" />
        </div>
        <div className="usha-stream-right">
          <p className="usha-stream-heading">USHA Social</p>
          <p className="usha-stream-text">
            Build conscious connections. Share ideas, stories, and reflections
            with a like-minded Dhārmic community. A digital saṅgha for the age
            of awakening.
          </p>
          <div
            className="explore-original-btn"
            onClick={() => navigate("/usha-social")}
          >
            <span>Connect with Community</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="uni-container usha-stream">
        <div className="usha-sparks-left">
          <p className="usha-stream-heading" style={{ textAlign: "left" }}>
            USHA Academy
          </p>
          <p className="usha-stream-text" style={{ textAlign: "left" }}>
            Learn Vedic sciences, rituals, and philosophies through structured
            courses and guided study paths. Your learning. Your pace. Rooted in
            Sanātana Dharma.
          </p>
          <div
            className="explore-original-btn"
            onClick={() => navigate("/usha-academy")}
          >
            <span>Browse Courses</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
        <div className="usha-sparks-right">
          <img src={ushaAcademy} alt="" />
        </div>
      </div>

      <LatestEvent />
      <div className="uni-container">
        <p className="quarry-form-heading" style={{ marginTop: "50px" }}>
          For any quarry or collaboration
        </p>
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

export default LandingPage;
