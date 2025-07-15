import React from "react";
import "./UshaDialogue.css";
import saveIcon from "../../assets/SAve (White) 1.png";
import Footer from "../../Layout/Footer";

const UshaDialogue = () => {
  return (
    <>
      <div className="dialogue-banner">
        <div className="uni-container">
          <div className="social-feed-navbar">
            <p onClick={() => navigate("/vedic-knowledge")}>USHA Stream</p>
            <p onClick={() => navigate("/vedic-reels")}>USHA Sparks</p>
            <p onClick={() => navigate("/blog")}>USHA Insights</p>
            <p onClick={() => navigate("/usha-dialogue")} className="active">
              USHA Dialogue
            </p>
            <p>USHA Social</p>
            <p>USHA Academy</p>
          </div>
        </div>
      </div>
      <div className="dialogue-body uni-container">
        <div className="knowledge-left">
          <p className="new-episode">NEW EPISODE</p>
          <p className="decoding-snan">
            Decoding Snan | The Sacred Bathing of Transformation | Hinduism
            Explained
          </p>
        </div>
        <div className="knowledge-right">
          <button className="knowledge-watch-btn">Watch Now</button>
          <div className="knowledge-right-bottom-div">
            <button className="knowledge-trailer-btn">Trailer</button>{" "}
            <img src={saveIcon} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UshaDialogue;
