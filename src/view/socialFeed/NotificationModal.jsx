import React from "react";
import threeDot from "../../assets/Group 2 1.png";
import priyaImg from "../../assets/Group 25 (1).png"

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
        <div className="notification-modal-body">
          <div>
            <img src={priyaImg} alt="" />
            <div>
              <p><span>Priya Vishwanathan and 4 other people</span> recently  liked your article.</p>
              <p>10h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
