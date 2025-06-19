import React from "react";
import "./MarketPlace.css";
import Profile from "./Profile";
import bellIcon from "../../assets/Notification bell 1.png";
import emailIcon from "../../assets/Msg Icon 1.png";
import MarketPlaceCards from "./MarketPlaceCards";

const MarketPlace = () => {
  return (
    <div className="market-place">
      <div className="uni-container market-place-container">
        <div className="market-place-left" style={{marginTop:'95px'}}>
          <Profile />

          <div className="market-place-fiters">
            <div className="filter-group">
              <h3 className="filter-heading">Category</h3>
              <p className="filter-subtitle">Books</p>
              <ul className="filter-list">
                <li>Health, Family & Personal Development</li>
                <li>Spiritual & Religion</li>
                <li>Science & Spirituality</li>
                <li>Science, Hinduism & Vedanta</li>
              </ul>
              <button className="see-more-btn">See More</button>
            </div>

            <div className="filter-columns">
              <div className="filter-column">
                <h4>Language</h4>
                <ul className="checkbox-list">
                  {[
                    "English",
                    "Hindi",
                    "Bengali",
                    "Marathi",
                    "Gujrati",
                    "Kannada",
                    "Tamil",
                    "Malayalam",
                    "Telugu",
                    "Assamese",
                    "Punjabi",
                    "Sanskrit",
                  ].map((lang) => (
                    <li key={lang}>
                      <label>
                        <input type="checkbox" /> {lang}
                      </label>
                    </li>
                  ))}
                </ul>
                <button className="see-more-btn">See More</button>
              </div>

              <div className="filter-column">
                <h4>Format</h4>
                <ul className="checkbox-list">
                  {["Paperback", "Hardcover", "Bundle"].map((format) => (
                    <li key={format}>
                      <label>
                        <input type="checkbox" /> {format}
                      </label>
                    </li>
                  ))}
                </ul>

                <h4 className="customer-review-title">Customer Review</h4>
                <div className="review-stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="review-text">& Up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="market-place-right">
          <div className="market-place-right-head">
            <div className="search-div88">
              <input type="text" placeholder="Search Here" />
              <div className="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="social-div">
              <div className="email-icon-div">
                <img src={emailIcon} alt="" />
              </div>
              <div className="email-icon-div">
                <img src={bellIcon} alt="" />
              </div>
            </div>
          </div>
          <MarketPlaceCards />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
