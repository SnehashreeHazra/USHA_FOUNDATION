import React, { useEffect } from "react";
import profileCover from "../../assets/image 62.png";
import sageIcon from "../../assets/Scholar Icon 4.png";
import profileImg from "../../assets/image 63.png";
import { useNavigate } from "react-router-dom";

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
        <div className="profile-body-wrapper">
          <div className="profile-body-left">
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/personal-profile")}
            >
              Pragyan Gupta
            </h2>

            <p className="user-about" style={{ marginTop: "10px" }}>
              Assistant Faculty
            </p>
            <p className="user-about">Jaipuria College, Kolkata</p>
          </div>
          <div className="profile-body-right">
            <p className="profile-right-body-text">
              <span>490</span> Friends
            </p>
            <p
              className="profile-right-body-text"
              style={{ marginTop: "10px" }}
            >
              <span>1.2K</span> Followers
            </p>
            <div className="sage-div">
              <img src={sageIcon} alt="" />
              <span>SAGE</span>
            </div>
          </div>
        </div>
        <div className="profile-bottom-div">
          <div className="profile-bottom-left">
            <div className="separator-line"></div>
            <p>Highest form of cleansing is Wisdom</p>
          </div>
          <button
            className="edit-bio-btn"
            onClick={() => navigate("/personal-profile")}
          >
            Edit Bio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
