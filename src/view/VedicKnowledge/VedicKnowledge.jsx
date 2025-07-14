import React from "react";
import "./VedicKnowledge.css";
import saveIcon from "../../assets/SAve (White) 1.png";

const VedicKnowledge = () => {
  return (
    <div>
      <div className="vedic-knowledge-banner">
        <div className="uni-container">
          <div className="social-feed-navbar">
            <p className="active">USHA Stream</p>
            <p>USHA Sparks</p>
            <p>USHA Insights</p>
            <p>USHA Dialouge</p>
            <p>USHA Social</p>
            <p>USHA Academy</p>
          </div>

          <div className="knowledge-container">
            <div className="knowledge-left">
              <p>NEW EPISODE</p>
              <p>
                Decoding Snan | The Sacred Bathing of Transformation | Hinduism
                Explained
              </p>
            </div>
            <div className="knowledge-right">
              <button>Watch Now</button>
              <div>
                <button>Trailer</button> <img src={saveIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedicKnowledge;
