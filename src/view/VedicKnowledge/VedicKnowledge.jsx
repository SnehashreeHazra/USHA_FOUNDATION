import React from "react";
import "./VedicKnowledge.css";
import saveIcon from "../../assets/SAve (White) 1.png";
import latestEpisodeImg1 from "../../assets/Snana Cover 16.png";
import latestEpisodeImg2 from "../../assets/Thumbnail 1.png";
import latestEpisodeImg3 from "../../assets/Openning Video thumbnail 1.png";
import sliderBtn from "../../assets/Arrow 79.png";
import vishnuImg from "../../assets/Group 210.png"
import vishnuImg2 from "../../assets/Group 209.png";
import vishnuImg3 from "../../assets/Group 211.png";
import upcomingImg1 from "../../assets/image 133.png"
import upcomingImg2 from "../../assets/image 138.png"
import upcomingImg3 from "../../assets/image 139.png";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const VedicKnowledge = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="vedic-knowledge-banner">
        <div className="uni-container">
          <div className="social-feed-navbar">
            <p onClick={()=>navigate('/vedic-knowledge')} className="active">USHA Stream</p>
            <p onClick={()=>navigate('/vedic-reels')}>USHA Sparks</p>
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
        <p className="latest-epi-heading">LATEST EPISODES</p>
        <div className="latest-episodes-div">
          <img className="episode" src={latestEpisodeImg1} alt="" />
          <img className="episode" src={latestEpisodeImg2} alt="" />
          <img className="episode" src={latestEpisodeImg3} alt="" />
          <img className="slider-arrow-btn" src={sliderBtn} alt="" />
        </div>
      </div>

      <div className="uni-container">
        <p className="latest-epi-heading">VISHNU AVATARS-EPISODES</p>
        <div className="latest-episodes-div">
          <img className="episode" src={vishnuImg} alt="" />
          <img className="episode" src={vishnuImg2} alt="" />
          <img className="episode" src={vishnuImg3} alt="" />
          <img className="slider-arrow-btn" src={sliderBtn} alt="" />
        </div>
      </div>

      <div className="uni-container">
        <p className="latest-epi-heading">SCIENCE IN RITUALS</p>
        <div className="latest-episodes-div">
          <img className="episode" src={latestEpisodeImg1} alt="" />
          <img className="episode" src={latestEpisodeImg2} alt="" />
          <img className="episode" src={latestEpisodeImg3} alt="" />
          <img className="slider-arrow-btn" src={sliderBtn} alt="" />
        </div>
      </div>

      <div className="uni-container">
        <p className="latest-epi-heading">UPCOMING SEASONS</p>
        <div className="latest-episodes-div">
          <img className="episode" src={upcomingImg1} alt="" />
          <img className="episode" src={upcomingImg2} alt="" />
          <img className="episode" src={upcomingImg3} alt="" />
          <img className="slider-arrow-btn" src={sliderBtn} alt="" />
        </div>
      </div>
      <button>Discover More Playlists Here</button>
      <Footer />
    </div>
  );
};

export default VedicKnowledge;
