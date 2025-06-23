import React, { useState } from "react";
import "./SocialFeed.css";
import storyProfile1 from "../../assets/image 63.png";
import storyProfile2 from "../../assets/Group 25.png";
import nextBtn from "../../assets/Polygon 2.png";
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

const SocialFeed = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  return (
    <div style={{ backgroundColor: "#eeeeee",paddingBottom:"50px" }}>
    {showModal && <CreatePostModal onClose={() => setShowModal(false)} />}
    {showNotification && <NotificationModal />}
      <div className="uni-container">
        <div className="social-feed">
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
              <img className="story-div03-profile" src={storyProfile2} alt="" />
            </div>
            <div className="story-div04"></div>
            <div className="story-div04"></div>
            <div className="story-div04"></div>
            <div className="story-next-btn">
              <img src={nextBtn} alt="" />
            </div>
          </div>
          <div className="social-feed-container">
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
                  <input type="text" placeholder="Create Post" onClick={() => setShowModal(true)} />
                  <div className="create-post-btn" onClick={() => setShowModal(true)}>Add</div>
                </div>
                <div className="social-div">
                  <div className="email-icon-div">
                    <img src={emailIcon} alt="" />
                  </div>
                  <div className="email-icon-div">
                    <img src={bellIcon} onClick={()=>setShowNotification(true)} alt="" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;
