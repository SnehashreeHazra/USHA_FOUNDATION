import React from "react";
import arrowImg from "../../assets/Arrow 8.png";
import viewLink from "../../assets/View icon 2.png";
import tribetImg from "../../assets/image 15.png";

const Tribes = () => {
  return (
    <div className="tribes">
      <div className="tribes-head">
        <p className="my-tribes-heading">My Tribes</p>
        <div className="more-btn">
          <span>More</span> <img src={arrowImg} alt="" />
        </div>
      </div>
      <div className="tribes-body">
        <div className="tribe-div">
          <img src={tribetImg} alt="" />
          <div>
            <p className="tribe-name">Sage’s Club</p>
            <p className="tribe-member">
              Total members - <span>103</span>{" "}
            </p>
            <p className="active-minute">Last active 42 minutes ago</p>
          </div>
          <img className="view-link" src={viewLink} alt="" />
        </div>
        <div className="tribe-div">
          <img src={tribetImg} alt="" />
          <div>
            <p className="tribe-name">Sage’s Club</p>
            <p className="tribe-member">
              Total members - <span>103</span>{" "}
            </p>
            <p className="active-minute">Last active 42 minutes ago</p>
          </div>
          <img className="view-link" src={viewLink} alt="" />
        </div>
        <div className="tribe-div">
          <img src={tribetImg} alt="" />
          <div>
            <p className="tribe-name">Sage’s Club</p>
            <p className="tribe-member">
              Total members - <span>103</span>{" "}
            </p>
            <p className="active-minute">Last active 42 minutes ago</p>
          </div>
          <img className="view-link" src={viewLink} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tribes;
