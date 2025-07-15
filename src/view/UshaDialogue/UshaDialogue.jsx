import React from "react";
import "./UshaDialogue.css";
import Footer from "../../Layout/Footer";

const UshaDialogue = () => {
  return (
    <>
      <div className="dialogue-banner">
        <div className="uni-container">
          <div className="social-feed-navbar">
              <p
                onClick={() => navigate("/vedic-knowledge")}
                className="active"
              >
                USHA Stream
              </p>
              <p onClick={() => navigate("/vedic-reels")}>USHA Sparks</p>
              <p onClick={() => navigate("/blog")}>USHA Insights</p>
              <p onClick={() => navigate("/usha-dialogue")}>USHA Dialogue</p>
              <p>USHA Social</p>
              <p>USHA Academy</p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UshaDialogue;
