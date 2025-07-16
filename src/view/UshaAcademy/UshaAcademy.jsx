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

const UshaAcademy = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #f7d873ff 10%, #fbf7efff 20%, #ffffff 100%)",
        paddingTop: "60px",
        paddingBottom: "50px",
      }}
    >
      <div className="uni-container">
        <div className="social-feed-navbar">
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
            <div className="published-div">
              <p className="published-heading">PUBLISHED</p>
              <div className="published-video">
                <div className="published-div">
                  <img src={publishedImg1} alt="" />
                  <div className="published-video-thumbnail">
                    <div>
                      <img src="" alt="" /> <span>50</span>
                    </div>
                    <p>
                      The Mythical Study on Maha Vishnu | Hinduism Explained I
                      Part - 1
                    </p>
                    <p>
                      Step into the sacred waters of time—where bathing is not
                      just a daily act, but a cosmic ritual of renewal.{" "}
                    </p>
                  </div>
                </div>
                <div className="published-div"></div>
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
  );
};

export default UshaAcademy;
