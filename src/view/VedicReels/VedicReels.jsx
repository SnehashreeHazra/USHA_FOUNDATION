import React from "react";
import "./VedicReels.css";
import latestSparkImg1 from '../../assets/image 175.png'
import latestSparkImg2 from '../../assets/image 176.png'
import latestSparkImg3 from '../../assets/image 177.png'
import latestSparkImg4 from '../../assets/image 178.png'
import latestSparkImg5 from '../../assets/image 179.png'
import latestSparkImg6 from '../../assets/image 180.png'
import latestSparkImg7 from '../../assets/image 181.png'
import ritualSparkImg1 from "../../assets/image 182.png"
import ritualSparkImg2 from "../../assets/image 183.png"
import ritualSparkImg3 from "../../assets/image 184.png"
import ritualSparkImg4 from "../../assets/image 185.png"
import ritualSparkImg5 from "../../assets/image 186.png"
import ritualSparkImg6 from "../../assets/image 187.png"
import ritualSparkImg7 from "../../assets/image 188.png"
import sliderBtn from "../../assets/Arrow 79.png";

const VedicReels = () => {
  return (
    <div
      className="vedic-reels"
      style={{
        background:
          "linear-gradient(to bottom, #F6D362 5%, #FBE8B1 8%, #ffffff 100%)",
        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      <div className="uni-container">
        <div className="social-feed-navbar">
          <p>USHA Stream</p>
          <p className="active">USHA Sparks</p>
          <p>USHA Insights</p>
          <p>USHA Dialouge</p>
          <p>USHA Social</p>
          <p>USHA Academy</p>
        </div>

        <div>
          <p>LATEST SPARKS</p>
          <div>
            <img src={latestSparkImg1} alt="" />
            <img src={latestSparkImg2} alt="" />
            <img src={latestSparkImg3} alt="" />
            <img src={latestSparkImg4} alt="" />
            <img src={latestSparkImg5} alt="" />
            <img src={latestSparkImg6} alt="" />
            <img src={latestSparkImg7} alt="" />
            <img src={sliderBtn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedicReels;
