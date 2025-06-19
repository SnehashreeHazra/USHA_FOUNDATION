import React from "react";
import img1 from "../../assets/image 63.png";
import img2 from "../../assets/image 20.png";
import img3 from "../../assets/image 8 (1).png";
import img4 from "../../assets/image 9 (2).png";
import redFocus from "../../assets/Group 57.png";
import videoAuthorImg from "../../assets/Group 25 (1).png";
import scholerIcon from "../../assets/Scholar Icon 4.png";

const LiveVideo = () => {
  return (
    <div className="live-video">
      <div className="video-background">
        <div className="images-div">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <span>& 50 Others</span>
        </div>
        <img src={redFocus} alt="" />
      </div>
      <div>
        <img className="video-author" src={videoAuthorImg} alt="" />
        {/* <img className="priya-scholer-icon" src={scholerIcon} alt="" /> */}
      </div>
      <div className="live-video-body">
        <h3 className="live-video-heading">The Soul in Daily Life</h3>
        <p className="live-video-description">
          USHA is the dawn, the usher of new light and hope. USHA doctrine will
          be a consciousness raiser <span>Read More</span>
        </p>
      </div>
    </div>
  );
};

export default LiveVideo;
