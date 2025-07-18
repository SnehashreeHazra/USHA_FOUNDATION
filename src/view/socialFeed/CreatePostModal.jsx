import React from "react";
import sendIcon from "../../assets/Send icon 2.png";
import profileOwner from "../../assets/image 63.png";
import scholerIcon from "../../assets/Scholar Icon 4.png";
import imgIcon from "../../assets/iconoir_media-image-list.png";
import videoIcon from "../../assets/iconoir_add-media-video.png";
import inviteIcon from "../../assets/fluent_people-28-regular.png";
import calenderIcon from "../../assets/fluent-mdl2_date-time.png";
import tagIcon from "../../assets/noun-tag-7890446 1.png";

const CreatePostModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={onClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <h3 className="create-new">Create New Post</h3>
          <button className="post-btn">
            POST <img src={sendIcon} alt="" />
          </button>
        </div>

        <div className="modal-body">
          <div className="user-section">
            <img src={profileOwner} alt="user" className="user-img" />
            <span className="username">Pragyan Gupta</span>
            <span className="user-tag">
              <img src={scholerIcon} alt="" />
              SAGE
            </span>
          </div>

          <textarea placeholder="Share your thoughts" className="post-input" />

          <div className="post-options">
            <button>
              <img src={imgIcon} alt="" /> Image
            </button>
            <button>
              <img src={videoIcon} alt="" /> Video
            </button>
            <button>
              <img src={inviteIcon} alt="" /> Invite
            </button>
            <button>
              <img src={tagIcon} alt="" /> Tags
            </button>
            <button>
              <img src={calenderIcon} alt="" /> Schedule
            </button>
          </div>

          <input
            type="text"
            className="topic-input"
            placeholder="Add your topic"
          />

          <div className="topic-tags">
            {[
              "Arts & Culture",
              "Astronomy",
              "Business & Economics",
              "Education",
              "Gaming",
              "Music",
              "Food",
              "Gaming",
              "Global Politics",
              "Health & Wellness",
              "Lifestyle & Fashion",
            ].map((topic, i) => (
              <span key={i} className="tag">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
