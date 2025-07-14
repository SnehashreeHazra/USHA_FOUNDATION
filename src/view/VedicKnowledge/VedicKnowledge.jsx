import React from "react";
import "./VedicKnowledge.css";
import saveIcon from "../../assets/SAve (White) 1.png";
import latestEpisodeImg1 from "../../assets/Snana Cover 16.png"
import latestEpisodeImg2 from "../../assets/Thumbnail 1.png"
import latestEpisodeImg3 from "../../assets/Openning Video thumbnail 1.png"
import sliderBtn from "../../assets/Arrow 79.png"

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
          <p className="knowledge-description">
            Step into the sacred waters of time—where bathing is not just a
            daily act, but a cosmic ritual of renewal. In this powerful visual
            essay, we explore Snāna (स्नान)—the ancient Hindu ritual of sacred
            bathing. From the celestial descent of the Ganges to the spiritual
            convergence at Kumbh Mela, discover how this practice purifies not
            only the body, but also the mind, soul, and karma... Read More
          </p>
        </div>
      </div>

      <div className="uni-container">
        <p>LATEST EPISODES</p>
        <div>
          <img src={latestEpisodeImg1} alt="" />
          <img src={latestEpisodeImg2} alt="" />
          <img src={latestEpisodeImg3} alt="" />
          <img src={sliderBtn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VedicKnowledge;
