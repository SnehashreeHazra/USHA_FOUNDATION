import React from "react";
import shareBtn from "../../assets/Share 4.png"

const SharePostModal = () => {
  return (
    <div className="share-modal">
      <div className="share-modal-container">
        <div className="modal-header">
          <button onClick={onClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <h3 className="create-new">Share Post</h3>
          <button className="post-btn">
            Share Now <img src={shareBtn} alt="" />
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

export default SharePostModal;
