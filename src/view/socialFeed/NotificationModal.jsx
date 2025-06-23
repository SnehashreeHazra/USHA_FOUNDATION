import React from "react";
import threeDot from "../../assets/Group 2 1.png";

const NotificationModal = () => {
  return (
    <div className="notification-modal">
      <div className="notification-modal-container">
        <div className="notification-modal-head">
          <p className="notification">Notifications</p>
          <img src={threeDot} alt="" />
        </div>
        <div className="notify-modal-head2">
          <div className="unread-btn active">All</div>
          <div className="unread-btn">Unread</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
