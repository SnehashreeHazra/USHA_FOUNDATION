import React, { useEffect } from "react";
import profileCover from "../../assets/image 62.png";
import sageIcon from "../../assets/Scholar Icon 4.png";
import profileImg from "../../assets/image 63.png";
import { useNavigate } from "react-router-dom";
import sageBadge from "../../assets/Group 193.png"

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="profile">
      <img className="profile-cover" src={profileCover} alt="" />
      <div className="profile-photo">
        <img src={profileImg} alt="" />
      </div>
      <div className="profile-body">
      <img className="sage-badge" src={sageBadge} alt="" />
      <h2>Pragyan Gupta</h2>
      <div className="profile-bottom-left">
            <div className="separator-line"></div>
            <p>Highest form of cleansing is Wisdom</p>
          </div>
      <div></div>
        
      </div>
    </div>
  );
};

export default Profile;
