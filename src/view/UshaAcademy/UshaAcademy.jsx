import React from "react";
import "./UshaAcademy.css";
import UshaEvent from "../socialFeed/UshaEvent";
import searchIcon from "../../assets/magnifying 3.png";
import followPerson1 from "../../assets/image 20.png";
import followPerson2 from "../../assets/image 63.png";
import followPerson3 from "../../assets/image 8 (1).png";
import followAdd from "../../assets/add 2 white.png";
import { useNavigate } from "react-router-dom";
import publishedImg1 from "../../assets/image 33.png";
import publishedImg2 from "../../assets/image 163.png";
import publishedPerson from "../../assets/Group 212.png";
import publishedBadge from "../../assets/noun-coins-5588066 4.png";
import likeIcon from "../../assets/like 1 5.png";
import draftVideoImg from "../../assets/11c166108f1902bba2d5f72301a5b741 1.png";
import recommendedImg1 from "../../assets/7ab948da903332c7e6da2bd8a5b19bfc 1.png";
import recommendedImg2 from "../../assets/image 164.png";
import recommendedPerson2 from "../../assets/Group 213.png";
import recommendedPerson1 from "../../assets/Group 214.png";
import trendingHeadingImg from "../../assets/noun-trending-7934261 1.png";
import trendingImg from "../../assets/Group 216.png";
import trendingPerson from "../../assets/36af73ef3cd451d1e60d45899ee15043 1.png";

const UshaAcademy = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="usha-academy"
        style={{
          background:
            "linear-gradient(to bottom, #f7d873ff 10%, #fbf7efff 20%, #ffffff 100%)",
          // paddingTop: "60px",
          paddingBottom: "50px",
        }}
      >
        <div className="uni-container">
          <div className="social-feed-navbar" style={{ marginTop: "60px" }}>
            <p onClick={() => navigate("/usha-stream")}>USHA Stream</p>
            <p onClick={() => navigate("/usha-sparks")}>USHA Sparks</p>
            <p onClick={() => navigate("/usha-insights")}>USHA Insights</p>
            <p onClick={() => navigate("/usha-dialogue")}>USHA Dialogue</p>
            <p onClick={() => navigate("/usha-social")}>USHA Social</p>
            <p onClick={() => navigate("/usha-academy")} className="active">
              USHA Academy
            </p>
          </div>
          <div className="blog">
            <div className="blog-left">
              <div className="types-of-messages">
                <div className="msg-type">All</div>
                <div className="msg-type">Latest</div>
                <div className="msg-type">Following</div>
                <div className="msg-type">Saved</div>
                <div className="article-search-div">
                  <input type="text" placeholder="Search Here" />
                  <div className="article-search">
                    <img src={searchIcon} alt="" />
                  </div>
                </div>
                <div className="msg-type0 active">Your Article</div>
              </div>
              <div className="published-container">
                <p className="published-heading">PUBLISHED</p>
                <div className="published-videos">
                  <div className="published-div">
                    <img
                      className="published-person"
                      src={publishedPerson}
                      alt=""
                    />
                    <img
                      className="published-video-thumb-img"
                      src={publishedImg1}
                      alt=""
                    />
                    <div className="published-video-thumbnail">
                      <div className="coin-div">
                        <img src={publishedBadge} alt="" /> <span>50</span>
                      </div>
                      <p className="video-thumbnail-text">
                        The Mythical Study on Maha Vishnu | Hinduism Explained I
                        Part - 1
                      </p>
                      <p className="video-description">
                        Step into the sacred waters of time—where bathing is not
                        just a daily act, but a cosmic ritual of renewal.{" "}
                      </p>
                    </div>
                    <div className="published-video-thumbnail2">
                      <p style={{ fontWeight: "600" }}>00:28:45</p>
                      <div className="video-reaction">
                        <img src={likeIcon} alt="" />
                        <span>You & 5K Others</span>
                      </div>
                    </div>
                  </div>
                  <div className="published-div">
                    <img
                      className="published-person"
                      src={publishedPerson}
                      alt=""
                    />
                    <img
                      className="published-video-thumb-img"
                      src={publishedImg2}
                      alt=""
                    />
                    <div className="published-video-thumbnail">
                      <div className="coin-div">
                        <img src={publishedBadge} alt="" /> <span>50</span>
                      </div>
                      <p className="video-thumbnail-text">
                        The Mythical Study on Maha Vishnu | Hinduism Explained I
                        Part - 2
                      </p>
                      <p className="video-description">
                        Step into the sacred waters of time—where bathing is not
                        just a daily act, but a cosmic ritual of renewal.{" "}
                      </p>
                    </div>
                    <div className="published-video-thumbnail2">
                      <p style={{ fontWeight: "600" }}>00:26:10</p>
                      <div className="video-reaction">
                        <img src={likeIcon} alt="" />
                        <span>You & 5K Others</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="published-container">
                <div className="draft-heading">
                  <p
                    className="published-heading"
                    style={{ marginBottom: "0px" }}
                  >
                    DRAFT
                  </p>
                  <button className="draft-publish-btn">Publish All</button>
                </div>
                <div className="published-videos">
                  <div className="published-div">
                    <img
                      className="published-person"
                      src={publishedPerson}
                      alt=""
                    />
                    <img
                      className="published-video-thumb-img"
                      src={draftVideoImg}
                      alt=""
                    />
                    <div className="published-video-thumbnail">
                      <div className="coin-div">
                        <img src={publishedBadge} alt="" /> <span>50</span>
                      </div>
                      <p className="video-thumbnail-text">
                        The Mythical Study on Maha Vishnu | Hinduism Explained I
                        Part - 3
                      </p>
                      <p className="video-description">
                        Step into the sacred waters of time—where bathing is not
                        just a daily act, but a cosmic ritual of renewal.{" "}
                      </p>
                    </div>
                    <div className="published-video-thumbnail2">
                      <p style={{ fontWeight: "600" }}>00:25:15</p>
                      <div className="video-reaction">
                        <img src={likeIcon} alt="" />
                        <span>You & 5K Others</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="published-container">
                <div className="draft-heading2">
                  <p
                    className="published-heading"
                    style={{ marginBottom: "0px" }}
                  >
                    TODAY'S TRENDING ON USHA
                  </p>
                  <img
                    className="trending-heading-img"
                    src={trendingHeadingImg}
                    alt=""
                  />
                </div>

                <div className="trending-video">
                  <div className="trending-video-div">
                    <img
                      className="trending-video-img"
                      src={trendingImg}
                      alt=""
                    />
                    <div className="trending-video-content">
                      <div className="trending-content1">
                        <div className="video-rating-div">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span>[10k]</span>
                        </div>
                        <img src={trendingPerson} alt="" />
                      </div>
                      <p className="trending-thumbnail-heading">
                        Narrative texts containing mythology | Hinduism
                        Explained{" "}
                      </p>
                      <p className="trending-description">
                        Hindu scriptures encompass a vast body of texts
                        considered sacred within Hinduism...
                      </p>
                      <div className="trending-reaction-div">
                        <div className="video-reaction">
                          <img src={likeIcon} alt="" /> <span>You & 5K Others</span>
                        </div>
                        <div className="coin-div00">
                          <img src={publishedBadge} alt="" /> <span>100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="trending-video-watch">Watch Now!</p>
                </div>
              </div>

              <div className="published-container">
                <p className="published-heading">
                  RECOMMENDED TO YOU BASED ON RATINGS
                </p>

                <div className="published-videos">
                  <div className="published-div">
                    <img
                      className="published-person"
                      src={recommendedPerson1}
                      alt=""
                    />
                    <img
                      className="published-video-thumb-img"
                      src={recommendedImg1}
                      alt=""
                    />
                    <div className="published-video-thumbnail">
                      <div className="coin-div">
                        <img src={publishedBadge} alt="" /> <span>50</span>
                      </div>
                      <p className="video-thumbnail-text">
                        The Hindu Worship of Rivers
                      </p>
                      {/* <p className="video-thumbnail-text" > The Vedic concept of the world</p> */}
                      <p className="video-description">
                        Introduction Rains must have seemed like magic to the
                        ancient man. This mystical wonder attached…
                      </p>
                    </div>
                    <div className="published-video-thumbnail2">
                      <p style={{ fontWeight: "600" }}>00:25:15</p>
                      <div className="video-reaction">
                        <img src={likeIcon} alt="" />
                        <span>You & 5K Others</span>
                      </div>
                    </div>
                  </div>

                  <div className="published-div">
                    <img
                      className="published-person"
                      src={recommendedPerson2}
                      alt=""
                    />
                    <img
                      className="published-video-thumb-img"
                      src={recommendedImg2}
                      alt=""
                    />
                    <div className="published-video-thumbnail">
                      <div className="coin-div">
                        <img src={publishedBadge} alt="" /> <span>50</span>
                      </div>
                      <p className="video-thumbnail-text">
                        The Vedic concept of the world is therefore that of a
                        forest.
                      </p>
                      <p className="video-description">
                        Therefore, preservation of the world demands that the
                        forest needs to be preserved. When we see Lord Krishna
                        we see ....
                      </p>
                    </div>
                    <div className="published-video-thumbnail2">
                      <p style={{ fontWeight: "600" }}>00:25:15</p>
                      <div className="video-reaction">
                        <img src={likeIcon} alt="" />
                        <span>You & 5K Others</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-right">
              <UshaEvent />
              <p style={{ fontWeight: "600", marginTop: "50px" }}>
                Topics You May Like
              </p>
              <div className="blog-topics-div">
                <button>Entrepreneurship</button>
                <button>Health & Wellness</button>
                <button>Business & Economics</button>
                <button>Food</button>
                <button>Lifestyle & Fashion</button>
                <button>Current affairs</button>
                <button>Astronomy</button>
                <button>Arts & Culture</button>
                <button>Gaming</button>
                <button>News & Media</button>
                <button>Global Politics</button>
                <button>Music</button>
                <button>Education</button>
              </div>
              <div className="follow-div">
                <p className="follow-div-heading">You Can Follow</p>
                <div className="follow-body">
                  <div className="follow-div1">
                    <div className="follow-div12">
                      <img src={followPerson1} alt="" />
                      <p style={{ fontWeight: "600", fontSize: "14px" }}>
                        Priya Viswanathan
                      </p>
                    </div>
                    <img className="follow-add-btn00" src={followAdd} alt="" />
                  </div>
                  <div className="follow-div1">
                    <div className="follow-div12">
                      <img src={followPerson2} alt="" />
                      <p style={{ fontWeight: "600", fontSize: "14px" }}>
                        Sabyasachi Chattopadhyay
                      </p>
                    </div>
                    <img className="follow-add-btn00" src={followAdd} alt="" />
                  </div>
                  <div className="follow-div1">
                    <div className="follow-div12">
                      <img src={followPerson3} alt="" />
                      <p style={{ fontWeight: "600", fontSize: "14px" }}>
                        Nethan Hedler
                      </p>
                    </div>
                    <img className="follow-add-btn00" src={followAdd} alt="" />
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#1a52b4",
                      fontWeight: "600",
                      marginTop: "10px",
                    }}
                  >
                    See more
                  </p>
                </div>
              </div>
              <p className="sidebar-about-us" style={{ marginTop: "50px" }}>
                About Us-Terms-Help Desk-Settings
              </p>
              <p
                style={{
                  color: "#8F8F8F",
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
              >
                USHA©2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UshaAcademy;
