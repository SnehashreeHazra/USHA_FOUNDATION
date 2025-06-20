import React, { useEffect } from "react";
import "./VideoPreview.css";
import Footer from "../../Layout/Footer";
import likeBtn from "../../assets/like 1 5.png";
import shareBtn from "../../assets/Share 6.png";
import shareImg2 from "../../assets/Share 1.png";
import commentImg from "../../assets/Comments icon 6.png";
import LiveVideo from "./LiveVideo";
import LiveVideo2 from "./LiveVideo2";

const VideoPreview = () => {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:true})
  },[])
  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <div className="ritual-banner">
          <div className="ritual-banner-overlay"></div>
        </div>
        <div className="uni-container ritual-banner-content">
          <div className="ritual-banner-content-left">
            <p style={{ color: "#000" }}>SCIENCE IN RITUAL</p>
            <h1 style={{ color: "#1A52B4", marginTop: "10px" }}>
              Decoding Snan | The Sacred Bathing of Transformation | Hinduism
              Explained
            </h1>
            <div className="video-reviews">
              <div className="stars-div">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span style={{ color: "#969696" }}>[4.5]</span>
              </div>
              <div className="video-reviews1">
                <div className="video-reviews-btn">
                  <img src={likeBtn} alt="" />
                  <span>54 Liked</span>
                </div>
                <div className="video-reviews-btn">
                  <img src={shareBtn} alt="" />
                  <span>2 Forwards</span>
                </div>
              </div>
            </div>
            <p className="overview-heading">OVERVIEW</p>
            <p className="video-overview-text">
              Step into the sacred waters of time—where bathing is not just a
              daily act, but a cosmic ritual of renewal. In this powerful visual
              essay, we explore Snāna (स्नान)—the ancient Hindu ritual of sacred
              bathing. From the celestial descent of the Ganges to the spiritual
              convergence at Kumbh Mela, discover how this practice purifies not
              only the body, but also the mind, soul, and karma
            </p>
            <p className="video-overview-text">
              Why do gods like Shiva and Vishnu undergo Snāna? What connects
              Snāna to Makar Sankranti and Samudra Manthan? How is this ritual
              echoed across Islam (Ghusl), Christianity (Baptism), Judaism
              (Mikvah), Buddhism, and Sikhism?
            </p>
            <p className="video-overview-text">
              Inspired by USHA (Universal Spiritual Human Awakening), this video
              invites you to rediscover ritual as science, faith as renewal, and
              water as sacred energy.
            </p>
          </div>
          <div className="ritual-banner-content-right">
            <div className="ritual-banner-content-right-top">
              <button>Watch Now</button>
              <img src={shareImg2} alt="" />
            </div>

            <div className="video-comments-section">
              <div className="video-comments-head">
                <p>Comments</p>
                <img src={commentImg} alt="" />
              </div>
              <div className="video-comments">
                <p className="video-comment-person">Nethan Hedler</p>
                <p className="video-cmt">
                  Beautiful video. Very informative and amazing presentation.
                </p>
              </div>
              <div className="video-comments">
                <p className="video-comment-person">Chinar Goswami</p>
                <p>It is really a beautiful video.</p>
              </div>
              <div className="video-comments">
                <p className="video-comment-person">Bhuban Sharma</p>
                <p>Excellent. Informative Video</p>
              </div>
              <div className="login-comment">Log in to Comment</div>
            </div>
          </div>
        </div>
        <div className="uni-container live-sessions">
          <p className="live-sessions-heading">LIVE SESSIONS</p>
          <div className="live-session-topics">
            <p>Topics you may like</p>
            <div className="live-session-topics-wrapper">
              <button>Health & Wellness</button>
              <button>Business & Economics</button>
              <button>Lifestyle & Fashion</button>
              <button>Current affairs</button>
              <button>Arts & Culture</button>
              <button>Gaming</button>
            </div>
          </div>
          <div className="live-videos-wrapper">
            <LiveVideo />
            <LiveVideo />
            <LiveVideo />
            <LiveVideo />
            <LiveVideo />
            <LiveVideo />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <button className="live-see-more">
              See More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="uni-container live-sessions">
          <p className="live-sessions-heading">WEEKLY TRENDING</p>
          <div className="live-session-topics">
            <p>Topics you may like</p>
            <div className="live-session-topics-wrapper">
              <button>Health & Wellness</button>
              <button>Business & Economics</button>
              <button>Lifestyle & Fashion</button>
              <button>Current affairs</button>
              <button>Arts & Culture</button>
              <button>Gaming</button>
            </div>
          </div>
          <div className="live-videos-wrapper">
            <LiveVideo2 />
            <LiveVideo />
            <LiveVideo />
            <LiveVideo />
            <LiveVideo />
            <LiveVideo />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <button className="live-see-more">
              See More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VideoPreview;
