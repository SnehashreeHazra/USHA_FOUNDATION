import React from "react";
import "./VedicReels.css";
import latestSparkImg1 from "../../assets/image 175.png";
import latestSparkImg2 from "../../assets/image 176.png";
import latestSparkImg3 from "../../assets/image 177.png";
import latestSparkImg4 from "../../assets/image 178.png";
import latestSparkImg5 from "../../assets/image 179.png";
import latestSparkImg6 from "../../assets/image 180.png";
import latestSparkImg7 from "../../assets/image 181.png";
import ritualSparkImg1 from "../../assets/image 182.png";
import ritualSparkImg2 from "../../assets/image 183.png";
import ritualSparkImg3 from "../../assets/image 184.png";
import ritualSparkImg4 from "../../assets/image 185.png";
import ritualSparkImg5 from "../../assets/image 186.png";
import ritualSparkImg6 from "../../assets/image 187.png";
import ritualSparkImg7 from "../../assets/image 188.png";
import sliderBtn from "../../assets/Arrow 79.png";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const VedicReels = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="vedic-reels"
        style={{
          background:
            "linear-gradient(to bottom, #f7d873ff 10%, #fbf7efff 20%, #ffffff 100%)",
          // paddingTop: "80px",
          paddingBottom: "50px",
        }}
      >
        <div className="uni-container">
          <div className="social-feed-navbar" style={{marginTop:"60px"}}>
            <p onClick={() => navigate("/usha-stream")}>USHA Stream</p>
            <p onClick={() => navigate("/usha-sparks")} className="active">
              USHA Sparks
            </p>
            <p onClick={()=>navigate('/usha-insights')}>USHA Insights</p>
            <p onClick={() => navigate("/usha-dialogue")}>USHA Dialogue</p>
            <p onClick={() => navigate("/usha-social")}>USHA Social</p>
            <p onClick={() => navigate("/usha-academy")}>USHA Academy</p>
          </div>

          <div className="sparks-reels">
            <p className="sparks-reels-heading">LATEST SPARKS</p>
            <div className="sparks-reels-container">
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

          <div className="sparks-reels">
            <p className="sparks-reels-heading">SCIENCE IN RITUALS-SPARKS</p>
            <div className="sparks-reels-container">
              <img src={ritualSparkImg1} alt="" />
              <img src={ritualSparkImg2} alt="" />
              <img src={ritualSparkImg3} alt="" />
              <img src={ritualSparkImg4} alt="" />
              <img src={ritualSparkImg5} alt="" />
              <img src={ritualSparkImg6} alt="" />
              <img src={ritualSparkImg7} alt="" />
              <img src={sliderBtn} alt="" />
            </div>
          </div>
        </div>
        <button className="discover-more-btn-sparks">
          Discover More Sparks Here
        </button>
      </div>
      <Footer />
    </>
  );
};

export default VedicReels;
