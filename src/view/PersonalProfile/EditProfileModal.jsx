import React from "react";

const EditProfileModal = () => {
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
      </div>
    </div>
  );
};

export default EditProfileModal;
