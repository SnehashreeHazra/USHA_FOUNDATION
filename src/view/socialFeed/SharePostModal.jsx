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
          <h3 className="create-new">Create New Post</h3>
          <button className="post-btn">
            Share Now <img src={shareBtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePostModal;
