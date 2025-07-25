import React from "react";
import followerImg from "../../assets/Group 25.png";
import threedot from "../../assets/Group 2.png";
import postImg from "../../assets/61xzwgm0r-L 1.png";
import likeIcon from "../../assets/like 1 2.png";
import msgIcon from "../../assets/Comments icon 1.png";
import shareIcon from "../../assets/Share 4.png";
import likeIcon2 from "../../assets/like 1 1.png";
import msgIcon2 from "../../assets/Comments icon 4.png";
import shareIcon2 from "../../assets/Share 3.png";
import sendIcon from "../../assets/Send icon 2.png";
import profilePerson from "../../assets/Group 3.png";
import arrowImg from "../../assets/Enter Icon 1.png";
import commentPersonImg from "../../assets/image 9 (2).png";
import commentPerson2Img from "../../assets/image 20.png";
import seekerImg from "../../assets/Group 26.png";
import seekerImg2 from "../../assets/Group 9.png";

const FollowerPost = () => {
  return (
    <div className="follower-post">
      <div className="follower-post-head">
        <div className="follower-post-head-left">
          <img src={followerImg} alt="" />
          <div>
            <div className="frnd-name-div">
              <p style={{ fontWeight: "600" }}>Priya Viswanathan</p>
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
        <p style={{ marginBottom: "15px" }}>Vishnu and the Universe</p>
        <p style={{ color: "#1a52b4", marginBottom: "20px" }}>
          #Snana #SpiritualAwakening #HinduRituals #SacredBath #KumbhMela
          #USHAChannel #ScienceInRitual #SanatanDharma #AncientWisdom
          #PinakiGangopadhyay
        </p>
        <img className="post-img" src={postImg} alt="" />
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
          <input type="text" placeholder="Comment Here" />
          <button>
            Send <img src={sendIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="comment-thread-wrapper">
        <p className="sort-label">Most Relevant ▼</p>

        {/* Main comment */}
        <div className="comment-card">
          <img
            className="comment-person-img"
            src={commentPersonImg}
            alt="user"
          />
          <div>
            <div className="comment-content">
              <p className="comment-author">Nethan Hedler</p>
              <p className="comment-text">
                Beautiful. Very informative and amazing presentation.
              </p>
            </div>
            <div className="comment-meta">
              <span>10m</span>
              <span>Like</span>
              <span>Reply</span>
            </div>
          </div>
        </div>

        {/* Reply */}
        <div className="comment-reply">
          <img src={arrowImg} alt="" />
          <img className="comment-avatar" src={commentPerson2Img} alt="user" />
          <div className="reply-content">
            <div className="priya-div">
              <p className="comment-author">Priya Viswanathan </p>
              <img
                src={seekerImg2}
                alt="Seeker badge"
                className="seeker-badge"
              />
            </div>
            <p className="comment-text">Yes... It is!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerPost;
