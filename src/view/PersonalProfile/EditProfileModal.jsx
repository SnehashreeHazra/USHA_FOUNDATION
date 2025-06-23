import React from "react";
import profileImg1 from "../../assets/image 4.png";

const EditProfileModal = ({ onClose }) => {
  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal-container">
        <div className="edit-profile-modal-header">
          <button onClick={onClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <h3 className="create-new">Edit Profile</h3>
          <button className="profile-save-btn">Save</button>
        </div>
        <div className="edit-profile-modal-body">
          <div className="profile-img55">
            <div className="profile-img55-div">
              <img src={profileImg1} alt="" />
            </div>
            <p className="upload-profile-picture">Upload Profile Picture</p>
          </div>

          <div className="edit-profile-form-container">
            <div className="edit-form-group">
              <div className="edit-form-input">
                <p style={{ color: "#8C8C8C" }}>Your Name</p>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="edit-form-input">
                <p style={{ visibility: "hidden" }}>Your Name</p>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="edit-form-input22">
              <p style={{ color: "#8C8C8C" }}>Your Bio</p>
              <textarea placeholder="Write Here" />
            </div>
            <div className="edit-form-group">
              <div className="edit-form-input">
                <p style={{ color: "#8C8C8C" }}>Email Address</p>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="edit-form-input">
                <p style={{ visibility: "hidden" }}>Your Name</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    maxWidth: "fit-content",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px", cursor: "pointer" }}
                  />{" "}
                  <span style={{ color: "#8C8C8C", whiteSpace: "nowrap" }}>
                    Make it Private
                  </span>
                </div>
              </div>
            </div>
            <div className="edit-form-group">
              <div className="edit-form-input">
                <p style={{ color: "#8C8C8C" }}>Profession</p>
                <input type="text" placeholder="Write Here" />
              </div>
              <div className="edit-form-input">
                <p style={{ color: "#8C8C8C" }}>Company/Institute</p>
                <input type="text" placeholder="Write Here" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
