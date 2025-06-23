import React from "react";
import threeDot from "../../assets/Group 2 1.png";

const NotificationModal = () => {
  return (
    <div className="notification-modal">
      <div className="notification-modal-container">
        <div className="notification-modal-head">
          <p>Notification</p>
          <img src={threeDot} alt="" />
        </div>
        <div className="notify-modal-head2">
          <div className="unread-btn">All</div>
          <div>Unread</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
