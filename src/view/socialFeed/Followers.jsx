import React from "react";
import arrowImg from "../../assets/Arrow 8.png";
import seekerIcon from "../../assets/Seeker Icon - Level 1 3.png";
import verifiedIcon from "../../assets/verified 3.png";

const Followers = ({ heading = "My Followers" }) => {
  return (
    <div className="followers-div">
      <div className="followers-head">
        <p className="my-followers-heading">{heading}</p>
        <div className="more-btn">
          <span>More</span> <img src={arrowImg} alt="" />
        </div>
      </div>
      <div className="followers-body">
        <div className="follower-name-img">
          <div className="follower-img01">
            <img className="follower-badge" src={seekerIcon} alt="" />
          </div>
          <p className="follower-name">Priya Viswanathan</p>
        </div>
        <div className="follower-name-img">
          <div className="follower-img02">
            <img className="follower-badge" src={verifiedIcon} alt="" />
          </div>
          <p className="follower-name">Sabyasachi Chattopadhyay</p>
        </div>
        <div className="follower-name-img">
          <div className="follower-img03">
            <img className="follower-badge" src={seekerIcon} alt="" />
          </div>
          <p className="follower-name">Nethan Hedler</p>
        </div>
      </div>
    </div>
  );
};

export default Followers;
