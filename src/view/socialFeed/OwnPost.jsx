import React from "react";
import followerImg from "../../assets/Group 25.png";
import threedot from "../../assets/Group 2.png";
import postImg from "../../assets/Group 43 (1).png";
import likeIcon from "../../assets/like 1 2.png";
import msgIcon from "../../assets/Comments icon 1.png";
import shareIcon from "../../assets/Share 4.png";
import likeIcon2 from "../../assets/like 1 1.png";
import msgIcon2 from "../../assets/Comments icon 4.png";
import shareIcon2 from "../../assets/Share 3.png";
import sendIcon from "../../assets/Send icon 2.png";
import profilePerson from "../../assets/Group 3.png";
import linkIcon from "../../assets/Attach 1.png"
import cameraIcon from "../../assets/Camera 1.png"
import videoIcon from "../../assets/Video 1.png"
import smileIcon from "../../assets/Emoji 1.png"
import gifIcon from "../../assets/GIF 1.png"

import seekerImg from "../../assets/Group 26.png";
import { useNavigate } from "react-router-dom";

const OwnPost = () => {
  const navigate = useNavigate();
  return (
    <div className="follower-post">
      <div className="follower-post-head">
        <div className="follower-post-head-left">
          <img
            className="follower-post-profile-img"
            src={profilePerson}
            alt=""
          />
          <div>
            <div className="frnd-name-div">
              <p style={{ fontWeight: "600" }}>Pragyan Gupta</p>
              <img src={seekerImg} alt="" />
            </div>
            <p style={{ color: "#8C8C8C", fontSize: "13px", marginTop: "5px" }}>
              1st May 2025 at 14:10
            </p>
          </div>
        </div>
        <img src={threedot} alt="" style={{ width: "18px" }} />
      </div>
      <div className="post-body">
        <p style={{ marginBottom: "15px" }}>
          Decoding the Mystery of Snāna? Why do millions take a sacred dip
          during Makar Sankranti? What makes water a force of spiritual
          transformation? Dive into the timeless Hindu ritual of Snāna—where
          karma is cleansed, the soul is reborn, and science meets sacredness.
        </p>
        <p style={{ color: "#1a52b4", marginBottom: "20px" }}>
          #Snana #SpiritualAwakening #HinduRituals #SacredBath #KumbhMela
          #USHAChannel #ScienceInRitual #SanatanDharma #AncientWisdom
          #PinakiGangopadhyay
        </p>
        <img
          onClick={() => navigate("/video-preview")}
          className="post-img"
          src={postImg}
          alt=""
        />
        <div className="like-comment">
          <div className="like-div">
            <img src={likeIcon} alt="" />
            <span>You and 54 Others</span>
          </div>
          <div className="like-div00">
            <div className="like-div">
              <img src={msgIcon} alt="" />
              <span>5 Comments</span>
            </div>

            <div className="like-div">
              <img src={shareIcon} alt="" />
              <span>2 Forwards</span>
            </div>
          </div>
        </div>
      </div>
      <div className="like-comment-section">
        <div className="like-div44">
          <img src={likeIcon2} alt="" />
          <span style={{ color: "#1a52b4", fontWeight: "600" }}>Like</span>
        </div>
        <div className="like-div44">
          <img src={msgIcon2} alt="" />
          <span>Comment</span>
        </div>
        <div className="like-div44">
          <img src={shareIcon2} alt="" />
          <span>Share</span>
        </div>
      </div>
      <div className="comment-input-container">
        <img className="follower-post-profile-img" src={profilePerson} alt="" />
        <div className="comment-input-box">
          <div className="comment-input-box1">
            <input type="text" placeholder="Comment Here" />
            <button className="post-agree-btn">Agree</button>
            <button className="post-disagree-btn">Disagree</button>
            <button className="post-neutral-btn">Neutral</button>
          </div>
          <div className="comment-input-box2">
          <div>
            <img src={linkIcon} alt="" />
            <img src={cameraIcon} alt="" />
            <img src={videoIcon} alt="" />
            <img src={gifIcon} alt="" />
            <img src={smileIcon} alt="" />
          </div>
          <button className="comment-send-btn">
            Send <img src={sendIcon} alt="" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnPost;
