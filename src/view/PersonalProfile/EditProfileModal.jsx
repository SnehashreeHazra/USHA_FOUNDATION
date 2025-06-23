import React from "react";
import profileImg1 from "../../assets/image 4.png"

const EditProfileModal = ({ onClose }) => {
  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal-container">
        <div className="edit-profile-modal-header">
          <button onClick={onClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <h3 className="create-new">Edit Profile</h3>
          <button className="post-btn">Save</button>
        </div>
        <div className="edit-profile-modal-body">
          <div className="profile-img55-div"><img src={profileImg1} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
