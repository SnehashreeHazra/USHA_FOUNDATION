import React from "react";
import "./LandingPage.css";
import LandingBanner from "./LandingBanner";
import placeEveryone from "../../assets/Group 180.png";
import yellowArrow from "../../assets/Group 181.png";
import ushaStream from "../../assets/Group 183.png";
import blueArrow from "../../assets/Group 188.png"
import ushaSparks from "../../assets/Group 182.png"
import ushaInsights from "../../assets/Group 187.png"
import LatestEvent from "./LatestEvent";

const LandingPage = () => {
  return (
    <div>
      <LandingBanner />
      <div className="place-for-everyone">
        <div className="uni-container place-for-every-container">
          <div className="place-for-everyone-left">
            <p className="place-everyone-heading">The ONE PLACE FOR EVERYONE</p>
            <p className="place-everyone-text">
              USHA is the dawn, the usher of new light and hope. Ushaism
              doctrine will be a consciousness raiser, based on science, reason,
              and spirituality. It's a platform for free thinkers, atheist and
              theists to learn, engage in dialogues, develop an unbiased
              understanding of reality and create a common future for humanity.
            </p>
            <div className="banner-about-us-btn">
              <span>Sign up now!</span>
              <img src={yellowArrow} alt="" />
            </div>
          </div>
          <div className="place-for-everyone-right">
            <img src={placeEveryone} alt="" />
          </div>
        </div>
      </div>
      <div className="uni-container usha-stream">
        <div className="usha-stream-left">
          <img src={ushaStream} alt="" />
        </div>
        <div className="usha-stream-right">
          <p className="usha-stream-heading">USHA Stream</p>
          <p className="usha-stream-text">
            Watch timeless stories and civilisational insights come alive
            through original documentaries, series, and visual essays. Streaming
            Vedic wisdom for the modern seeker.
          </p>
          <div className="explore-original-btn">
            <span>Explore Originals</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="uni-container usha-stream">
        <div className="usha-sparks-left">
        <p className="usha-stream-heading" style={{textAlign:'left'}}>USHA Sparks</p>
          <p className="usha-stream-text" style={{textAlign:'left'}}>
            Watch timeless stories and civilisational insights come alive
            through original documentaries, series, and visual essays. Streaming
            Vedic wisdom for the modern seeker.
          </p>
          <div className="explore-original-btn">
            <span>Ignite Your Mind</span>
            <img src={blueArrow} alt="" />
          </div>
          
        </div>
        <div className="usha-sparks-right">
          <img src={ushaSparks} alt="" />
        </div>
      </div>

      <div className="uni-container usha-stream">
        <div className="usha-stream-left">
          <img src={ushaInsights} alt="" />
        </div>
        <div className="usha-stream-right">
          <p className="usha-stream-heading">USHA Insights</p>
          <p className="usha-stream-text">
            Read transformative articles, decoded scriptures, and cross-cultural thought-pieces from modern Dhārmic thinkers.
Ancient wisdom meets modern inquiry.

          </p>
          <div className="explore-original-btn">
            <span>Explore Articles</span>
            <img src={blueArrow} alt="" />
          </div>
        </div>
      </div>

      <LatestEvent />
    </div>
  );
};

export default LandingPage;
