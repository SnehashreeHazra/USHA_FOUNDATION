import React from "react";
import BigImage from "../../assets/image 36.png";
import blueArrow from "../../assets/Group 190.png";
import cardImg from "../../assets/Snana Cover 16.png";
import blackArrow from "../../assets/Group 207.png";

const LatestEvent = () => {
  return (
    <div className="latest-event">
      <div className="uni-container">
        <img className="latest-event-big-img" src={BigImage} alt="" />
        <p className="latest-event-heading">LATEST EVENTS</p>
        <div className="latest-events-cards">
          <div className="latest-event-card active">
            <img className="latest-event-card-img" src={cardImg} alt="" />
            <div className="latest-event-card-text">
              <p className="upcoming-text" style={{ color: "white" }}>
                Upcoming Events
              </p>
              <p className="event-heading" style={{ color: "white" }}>
                Kumbh Kahini
              </p>
              <p className="event-process" style={{ color: "white" }}>
                Online
              </p>
              <div
                className="event-card-btn"
                style={{ backgroundColor: "white" }}
              >
                <span>23rd June - 5pm</span>
                <img src={blueArrow} alt="" />
              </div>
            </div>
          </div>
          <div className="latest-event-card">
            <img className="latest-event-card-img" src={cardImg} alt="" />
            <div className="latest-event-card-text">
              <p className="upcoming-text">Upcoming Events</p>
              <p className="event-heading">Kumbh Kahini</p>
              <p className="event-process">Online</p>
              <div className="event-card-btn">
                <span>23rd June - 5pm</span>
                <img src={blackArrow} alt="" />
              </div>
            </div>
          </div>
          <div className="latest-event-card">
            <img className="latest-event-card-img" src={cardImg} alt="" />
            <div className="latest-event-card-text">
              <p className="upcoming-text">Upcoming Events</p>
              <p className="event-heading">Kumbh Kahini</p>
              <p className="event-process">Online</p>
              <div className="event-card-btn">
                <span>23rd June - 5pm</span>
                <img src={blackArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEvent;
