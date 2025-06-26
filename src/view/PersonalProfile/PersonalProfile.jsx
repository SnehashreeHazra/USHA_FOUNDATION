import React, { useEffect, useState } from "react";
import "./PersonalProfile.css";
import editPen from "../../assets/Edit 1.png";
import scholerIcon from "../../assets/Scholar Icon 4.png";
import circlePlus from "../../assets/add 2 white.png";
import profileImage from "../../assets/image 4.png";
import Followers from "../socialFeed/Followers";
import FollowerPost from "../socialFeed/FollowerPost";
import bellIcon from "../../assets/Notification bell 1.png";
import emailIcon from "../../assets/Msg Icon 1.png";
import shareIcon from "../../assets/Share 1.png";
import CreatePostModal from "../socialFeed/CreatePostModal";
import Tribes from "../socialFeed/Tribes";
import UshaEvent from "../socialFeed/UshaEvent";
import OwnPost from "../socialFeed/OwnPost";
import EditProfileModal from "./EditProfileModal";

const PersonalProfile = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ paddingBottom: "50px", overflow: "hidden" }}>
      {showModal && <EditProfileModal onClose={() => setShowModal(false)} />}
      <div className="profile-section">
        <div className="profile-cover-img">
          <div className="profile-cover-edit-btn">
            <img src={editPen} alt="" /> <span>EDIT</span>
          </div>
        </div>
        <div className="profile-image-div">
          <img src={profileImage} alt="" />
        </div>
        <div className="profile-body00">
          <div className="uni-container profile-body-container">
            <div className="profile-body-left00">
              <div className="profile-body-left-top">
                <h1>Pragyan Gupta</h1>
                <div className="profile-badge">
                  <img src={scholerIcon} alt="" />
                  <span>SAGE</span>
                </div>
              </div>
              <div className="edit-profile-section">
                <div className="add-story56">
                  <img src={circlePlus} alt="" />
                  <span>Add Your Story</span>
                </div>
                <button onClick={() => setShowModal(true)}>Edit Profile</button>
              </div>
            </div>
            <div className="profile-body-right00">
              <div className="profile-body-right00-top"></div>
              <div className="highest-form">
                <p>Highest form of cleansing is Wisdom</p>
              </div>
              <div className="profile-about">
                <div className="frnd-followers">
                  <p className="profile-frnds">
                    <span>490</span> Friends
                  </p>
                  <p className="profile-frnds">
                    <span>1.2K</span> Followers
                  </p>
                </div>
                <div className="location-info-div">
                  <p className="profession">Assistant Faculty</p>
                  <p className="location">Jaipuria College, Kolkata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uni-container profile-page-body">
        <div className="profile-page-left-body">
          <Followers heading="My Circle" />
          <Followers />
          <hr />
          <Tribes />
          <hr />
          <UshaEvent />
        </div>
        <div className="profile-page-right-body">
          <div className="social-feed-right-head">
            <div className="create-post-input">
              <input
                type="text"
                placeholder="Create Post"
                onClick={() => setShowModal(true)}
              />
              <div
                className="create-post-btn"
                onClick={() => setShowModal(true)}
              >
                Add
              </div>
            </div>
            <div className="social-div">
              <div className="email-icon-div">
                <img src={emailIcon} alt="" />
              </div>
              <div className="email-icon-div">
                <img src={bellIcon} alt="" />
              </div>
              <div className="email-icon-div">
                <img src={shareIcon} alt="" />
              </div>
            </div>
          </div>
          <hr style={{ margin: "50px 0" }} />
          <OwnPost />
          <FollowerPost />
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
