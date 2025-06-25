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
          <div className="notify-body-div1">
            <img src={priyaImg} alt="" />
            <div className="notify-body-div2">
              <p><span style={{fontWeight:'600'}}>Priya Vishwanathan and 4 other people</span> recently  liked your article.</p>
              <p style={{color:'#1a52b4', fontSize:'12px', fontWeight:'600', marginTop:'5px'}}>10h</p>
            </div>
          </div>
          <div className="notify-body-div1">
            <img src={priyaImg} alt="" />
            <div className="notify-body-div2">
              <p><span style={{fontWeight:'600'}}>Priya Vishwanathan and 4 other people</span> recently  liked your article.</p>
              <p style={{color:'#1a52b4', fontSize:'12px', fontWeight:'600', marginTop:'5px'}}>10h</p>
            </div>
          </div>
          <div className="notify-body-div1">
            <img src={priyaImg} alt="" />
            <div className="notify-body-div2">
              <p><span style={{fontWeight:'600'}}>Priya Vishwanathan and 4 other people</span> recently  liked your article.</p>
              <p style={{color:'#1a52b4', fontSize:'12px', fontWeight:'600', marginTop:'5px'}}>10h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
