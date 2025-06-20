import React from "react";
import "./Messaging.css";
import editBtn from "../../assets/Group 21.png";
import threeDot from "../../assets/Group 2.png";
import friendLogo from "../../assets/Group 25 (1).png";
import seekerBtn from "../../assets/Group 26.png";
import UshaEvent from "../socialFeed/UshaEvent";
import phoneIcon from "../../assets/Voice Call 1.png";
import videoIcon from "../../assets/Video call 1.png";
import infoIcon from "../../assets/info 1.png";
import flagIcon from "../../assets/Report Flag 1.png";
import personImg from "../../assets/Group 25 (1).png";
import addIcon from "../../assets/add 2.png";
import imgIcon from "../../assets/iconoir_media-image-list.png";
import videoIcon2 from "../../assets/iconoir_add-media-video.png";
import fileIcon from "../../assets/noun-doc-3645184 1.png";
import sendBtn from "../../assets/Send icon 2.png";
import smileIcon from "../../assets/Emoji icon 1.png";
import shareSmallIcon from "../../assets/Share 5.png";
import threeDot2 from "../../assets/Group 41.png";
import img44 from "../../assets/image 63.png";
import chatVideoImg from "../../assets/Group 43 (1).png";
import { useNavigate } from "react-router-dom";

const Messaging = () => {
  const navigate = useNavigate();
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div className="uni-container">
        <div className="messaging">
          <div className="message-left">
            <div className="message-left-head">
              <h2 style={{ fontWeight: "500" }}>Messages</h2>
              <div className="message-edit-more">
                <img className="edit-btn2" src={editBtn} alt="" />
                <img src={threeDot} alt="" />
              </div>
            </div>
            <div className="message-search-box">
              <input type="text" placeholder="Search Here" />
              <div className="message-search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="types-of-messages">
              <div className="msg-type">All</div>
              <div className="msg-type">Circle</div>
              <div className="msg-type">Unread</div>
              <div className="msg-type">Tribes</div>
            </div>
            <div className="friends-list">
              <div className="friend">
                <div className="friend-div1">
                  <img src={friendLogo} alt="" />
                  <div className="friend-div2">
                    <div className="friend-div3">
                      <p style={{ fontWeight: "600" }}>Priya Viswanathan</p>
                      <img src={seekerBtn} alt="" />
                    </div>
                    <p className="active">Last Active 2 Hours Ago</p>
                  </div>
                </div>
              </div>
              <div className="friend active">
                <div className="friend-div1">
                  <img src={friendLogo} alt="" />
                  <div className="friend-div2">
                    <div className="friend-div3">
                      <p style={{ fontWeight: "600" }}>Priya Viswanathan</p>
                      <img src={seekerBtn} alt="" />
                    </div>
                    <p className="active">Last Active 2 Hours Ago</p>
                  </div>
                </div>
              </div>
              <div className="friend">
                <div className="friend-div1">
                  <img src={friendLogo} alt="" />
                  <div className="friend-div2">
                    <div className="friend-div3">
                      <p style={{ fontWeight: "600" }}>Priya Viswanathan</p>
                      <img src={seekerBtn} alt="" />
                    </div>
                    <p className="active">Last Active 2 Hours Ago</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <UshaEvent />
          </div>
          <div className="message-right">
            <div className="message-right-head">
              <div className="message-right-head-left">
                <img className="person-img" src={personImg} alt="" />
                <div className="friend-div2">
                  <div className="friend-div3">
                    <p style={{ fontWeight: "600" }}>Priya Viswanathan</p>
                    <img src={seekerBtn} alt="" />
                  </div>
                  <p className="active">Active</p>
                </div>
              </div>
              <div className="message-right-head-right">
                <img src={phoneIcon} alt="" />
                <img src={videoIcon} alt="" />
                <img src={infoIcon} alt="" />
                <img src={flagIcon} alt="" />
              </div>
            </div>
            <div className="message-box">
              <p className="msg-time">26/04/2025, 01:22</p>
              <div className="frnd-chat">
                <img className="chat-frnd-img" src={personImg} alt="" />
                <div className="chatbox">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam condimentum quam vitae mi aliquet ultrices. Praesent
                    in ipsum et odio tempor fermentum a sed neque. Nunc finibus
                    diam enim, sed mollis diam scelerisque in. Quisque
                    elementum, arcu ultricies condimentum convallis, augue ex
                    cursus urna, in ullamcorper massa enim in leo. Nunc dolor
                    purus, rhoncus ut tempus tincidunt, viverra sit amet est.
                    Suspendisse vehicula non quam ac mollis. Fusce vel dui vel
                    nulla consectetur molestie. Morbi eu neque a est ornare
                    vehicula ac et nulla. Praesent lobortis vestibulum leo non
                    fringilla.
                  </p>
                </div>
                <div className="msg-react-icons">
                  <img src={smileIcon} alt="" />
                  <img src={shareSmallIcon} alt="" />
                  <img src={threeDot2} alt="" />
                </div>
              </div>

              <div className="owner-chat">
                <div className="msg-react-icons">
                  <img src={smileIcon} alt="" />
                  <img src={shareSmallIcon} alt="" />
                  <img src={threeDot2} alt="" />
                </div>
                <div className="chatbox1">
                  <p>
                    Duis enim purus, consectetur eu dui eget, mattis pharetra
                    nisi. Morbi blandit neque diam, quis egestas magna
                    condimentum sagittis. In rutrum velit vitae ante tempor, at
                    rhoncus leo pulvinar.
                  </p>
                </div>
                <img className="chat-frnd-img" src={img44} alt="" />
              </div>
            <div className="owner-chat">
              <div className="chatbox1">
                <img src={chatVideoImg} alt="" />
                <p>
                  Vestibulum et porttitor lacus. Vivamus iaculis, orci et
                  gravida tincidunt, massa ipsum tincidunt ex, a interdum massa
                  velit vitae lacus. 
                </p>
              </div>
              <img className="chat-frnd-img" src={img44} alt="" />
            </div>
            </div>
            <div className="message-send-div">
              <img className="msg-box-btn" src={addIcon} alt="" />
              <img className="msg-box-btn" src={imgIcon} alt="" />
              <img className="msg-box-btn" src={videoIcon2} alt="" />
              <img className="msg-box-btn" src={fileIcon} alt="" />
              <div className="chat-input">
                <input type="text" placeholder="Aa" />
                <button>
                  Send <img src={sendBtn} alt="Send icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
