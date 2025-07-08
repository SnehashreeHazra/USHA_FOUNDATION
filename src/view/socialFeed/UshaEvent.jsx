import React from "react";
import img1 from "../../assets/image 63.png";
import img2 from "../../assets/image 20.png";
import img3 from "../../assets/image 8 (1).png";
import img4 from "../../assets/image 9 (2).png";
import viewLink from "../../assets/View icon 4.png";
import locationImg from "../../assets/location 1.png";
import calenderImg from "../../assets/calender 2.png";
import heartIcon from "../../assets/noun-love-861872 1.png";
import shareIcon from "../../assets/noun-share-5492448 1.png";

const UshaEvent = () => {
  return (
    <div className="usha-event">
      <div className="usha-event-head">
        <div className="images-div">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <span>& 50 Others</span>
        </div>
        <div className="view-link-btn">
          <img src={viewLink} alt="" />
        </div>
      </div>
      <div className="event-overlay">
        <p className="event-title">USHA Event</p>
        <h2 className="event-name">Science in Rituals</h2>
        <div className="event-details">
          <div className="event-details1">
            <img src={locationImg} alt="" />
            <span>Kolkata</span>
          </div>
          <div className="event-details1">
            <img src={calenderImg} alt="" />
            <span>20/06/2025 - 05:30 PM</span>
          </div>
        </div>
        <hr className="event-hr" />
        <div className="event-footer">
          <div className="icons">
            <div className="icon-div">
              <img src={heartIcon} alt="" />
            </div>
            <div className="icon-div">
              <img src={shareIcon} alt="" />
            </div>
          </div>
          <button className="join-btn00">JOIN</button>
        </div>
      </div>
    </div>
  );
};

export default UshaEvent;
