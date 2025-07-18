import React from "react";
import liveVideoImg from "../../assets/Openning Video thumbnail 1.png";
import playBtn from "../../assets/noun-play-6444203 1.png";
import likeImg from "../../assets/like 1 5.png";
import viewIcon from "../../assets/noun-view-7899253 6.png";

const LiveVideo2 = () => {
  return (
    <div className="live-video2">
      <img className="live-video2-img" src={liveVideoImg} alt="" />
      <div className="live-video2-body">
        <div className="live-video2-body-top">
          <h3>USHA Dialogue - Universal Spiritual Human Awakening</h3>{" "}
          <button className="video-play-btn">
            PLAY <img src={playBtn} alt="" />
          </button>
        </div>
        <p className="live-video-description">
          USHA is the dawn, the usher of new light and hope. USHA doctrine will
          be a consciousness raiser{" "}
          <span style={{ color: "#000", cursor: "pointer" }}>Read More</span>
        </p>
        <div className="live-video2-bottom">
          <div className="live-video2-bottom1">
            <img src={likeImg} alt="" />
            <span>You & 5K Others</span>
          </div>
          <div className="live-video2-bottom1">
            <img src={viewIcon} alt="" />
            <span>120k views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideo2;
