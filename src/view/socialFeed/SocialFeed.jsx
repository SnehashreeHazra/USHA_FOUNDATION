import React, { useState } from "react";
import "./SocialFeed.css";
import storyProfile1 from "../../assets/image 63.png";
import storyProfile2 from "../../assets/Group 25.png";
import storyProfile3 from "../../assets/Group 191.png";
import nextBtn from "../../assets/Polygon 2 (1).png";
import Profile from "../marketPlace/Profile";
import bellIcon from "../../assets/Notification bell 1.png";
import emailIcon from "../../assets/Msg Icon 1.png";
import shareIcon from "../../assets/Share 1.png";
import Followers from "./Followers";
import Tribes from "./Tribes";
import FollowerPost from "./FollowerPost";
import CreatePostModal from "./CreatePostModal";
import UshaEvent from "./UshaEvent";
import OwnPost from "./OwnPost";
import NotificationModal from "./NotificationModal";
import socialIcon from "../../assets/Feed_ 1.png";
import youtubeIcon from "../../assets/OTT & live Icon 8.png";
import researchIcon from "../../assets/Research 3.png";
import acadeymIcon from "../../assets/Learning 5.png";
import marketIcon from "../../assets/Marketplace 2.png";
import insightIcon from "../../assets/Blogging 2.png";
import fndIcon from "../../assets/Friends 3.png";
import addfndIcon from "../../assets/followers 1.png";
import cohortsIcon from "../../assets/Group 101.png";
import saveIcon from "../../assets/Save Icon 3.png";
import { useNavigate } from "react-router-dom";

const SocialFeed = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #f7d873ff 10%, #fbf7efff 20%, #ffffff 100%)",
        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      {/* {showModal && <CreatePostModal onClose={() => setShowModal(false)} />} */}
      {/* {showNotification && <NotificationModal />} */}
      <div className="uni-container">
        <div className="social-feed-navbar">
          <p onClick={() => navigate("/usha-stream")}>USHA Stream</p>
          <p onClick={() => navigate("/usha-sparks")}>USHA Sparks</p>
          <p onClick={() => navigate("/usha-insights")}>USHA Insights</p>
          <p onClick={() => navigate("/usha-dialogue")}>USHA Dialouge</p>
          <p onClick={() => navigate("/usha-social")} className="active">
            USHA Social
          </p>
          <p>USHA Academy</p>
        </div>
        <div className="social-feed">
          <div className="social-div-left">
            <div className="sidebar-menu active">
              <img src={socialIcon} alt="" />
              <span>USHA Social</span>
            </div>
            <div className="sidebar-menu">
              <img src={youtubeIcon} alt="" />
              <span>USHA Stream</span>
            </div>
            <div className="sidebar-menu">
              <img src={researchIcon} alt="" />
              <span>USHA Research</span>
            </div>
            <div className="sidebar-menu">
              <img src={acadeymIcon} alt="" />
              <span>USHA Academy</span>
            </div>
            <div className="sidebar-menu">
              <img src={marketIcon} alt="" />
              <span>USHA Market</span>
            </div>
            <div className="sidebar-menu">
              <img src={insightIcon} alt="" />
              <span>USHA Insight</span>
            </div>
            <p className="sidebar-about-us">
              About Us-Terms-Help Desk-Settings
            </p>
            <p
              style={{
                color: "#8F8F8F",
                marginTop: "5px",
                marginBottom: "10px",
              }}
            >
              USHA©2025
            </p>
            <button className="sidebar-logout-btn">Log Out</button>
          </div>
          <div className="social-div-middle">
            <div className="stories-div">
              <div className="story-div01">
                <div className="story-add-icon">
                  <i class="fa-solid fa-circle-plus"></i>
                </div>
                <div className="story-div01-text">
                  <p>Add Your</p>
                  <h1>Story</h1>
                </div>
              </div>
              <div className="story-div02">
                <div className="story-profile-img">
                  <img src={storyProfile1} alt="" />
                </div>
              </div>
              <div className="story-div03">
                <img
                  className="story-div03-profile"
                  src={storyProfile2}
                  alt=""
                />
              </div>
              <div className="story-div04">
                <img
                  className="story-div04-profile"
                  src={storyProfile3}
                  alt=""
                />
              </div>

              <div className="story-next-btn">
                <img src={nextBtn} alt="" />
              </div>
            </div>
            <div>
              <div></div>
              <div className="create-post-container">
                <img src={storyProfile1} alt="" />
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
              </div>
            </div>

            <OwnPost />
          </div>
          <div className="social-div-right">
            <Profile />
            <div className="profile-friends-div">
              <div className="profile-friends-div1">
                <img src={fndIcon} alt="" />
                <span>Friends</span>
              </div>
              <div className="profile-friends-div1">
                <img src={addfndIcon} alt="" />
                <span>Followers</span>
              </div>
              <div className="profile-friends-div1">
                <img src={cohortsIcon} alt="" />
                <span>Cohorts</span>
              </div>
              <div className="profile-friends-div1">
                <img src={saveIcon} alt="" />
                <span>Saved Items</span>
              </div>
            </div>
            <UshaEvent />
          </div>

          {/* <div className="social-feed-container">
            <div className="social-feed-left">
              <Profile />
              <hr />
              <Followers heading="My Circle" />
              <Followers />
              <hr />
              <Tribes />
              <hr />
              <UshaEvent />
            </div>
            <div className="social-feed-right">
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
                    <img
                      src={bellIcon}
                      onClick={() => setShowNotification(true)}
                      alt=""
                    />
                  </div>
                  <div className="email-icon-div">
                    <img src={shareIcon} alt="" />
                  </div>
                </div>
              </div>
              <hr />
              <OwnPost />
              <FollowerPost />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;
