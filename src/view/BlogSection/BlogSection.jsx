import React from "react";
import "./BlogSection.css";
import articleAuthor from "../../assets/Group 3.png";
import scholerIcon from "../../assets/Scholar Icon 4.png";
import saveIcon from "../../assets/noun-save-5791622 1.png";
import articleImg1 from "../../assets/61xzwgm0r-L 1.png";
import articleImg2 from "../../assets/de17dc290a3d91085e2486e7228a870d 1.png";
import likeIcon from "../../assets/like 1 2.png";
import commentIcon from "../../assets/Comments icon 1.png";
import shareIcon from "../../assets/Share 4.png";
import UshaEvent from "../socialFeed/UshaEvent";
import followPerson1 from "../../assets/image 20.png";
import followPerson2 from "../../assets/image 63.png";
import followPerson3 from "../../assets/image 8 (1).png";
import followPerson4 from "../../assets/image 9 (2).png";
import followAdd from "../../assets/add 2 white.png";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div className="uni-container">
        <div className="blog">
          <div className="blog-left">
            <div className="blog-left-head">
              <div className="create-new-article">
                <input type="text" placeholder="Create New Article Here" />
                <button>Add</button>
              </div>
              <div className="search-div00">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="types-of-messages">
              <div className="msg-type">All</div>
              <div className="msg-type">Latest</div>
              <div className="msg-type">Following</div>
              <div className="msg-type">Saved</div>
              <div className="msg-type active">Your Article</div>
            </div>
            <div className="aricle-div">
              <div className="article-head">
                <div className="article-head1">
                  <img src={articleAuthor} alt="" />
                  <p className="article-author">Pragyan Gupta</p>
                  <div className="sage-div00">
                    <img src={scholerIcon} alt="" />
                    <span>SAGE</span>
                  </div>
                </div>
                <img className="save-icon" src={saveIcon} alt="" />
              </div>
              <div className="article-body">
                <div className="aricle-body1">
                  <h2
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/blog2")}
                  >
                    The Soul in Daily Life—Hinduism and the Concepts of the
                    Atman
                  </h2>
                  <p className="article-text">
                    The term and concept of Hinduism was coined only in recent
                    times. Otherwise, there was really no such thing. The word
                    'Hind...
                  </p>
                  <div className="article-bottom">
                    <p className="article-bottom1">
                      3rd May 2025 at <span>20:35</span>
                    </p>
                    <div className="article-bottom2">
                      <img src={likeIcon} alt="" />{" "}
                      <span>You and 54 Others</span>
                    </div>
                    <div className="article-bottom2">
                      <img src={commentIcon} alt="" /> <span>5 Comments</span>
                    </div>
                    <div className="article-bottom2">
                      <img src={shareIcon} alt="" /> <span>2 Forwrds</span>
                    </div>
                  </div>
                </div>
                <img className="article-img" src={articleImg1} alt="" />
              </div>
            </div>
            <div className="aricle-div">
              <div className="article-head">
                <div className="article-head1">
                  <img src={articleAuthor} alt="" />
                  <p className="article-author">Pragyan Gupta</p>
                  <div className="sage-div00">
                    <img src={scholerIcon} alt="" />
                    <span>SAGE</span>
                  </div>
                </div>
                <img className="save-icon" src={saveIcon} alt="" />
              </div>
              <div className="article-body">
                <div className="aricle-body1">
                  <h2 style={{ cursor: "pointer" }}>
                    Unlocking the Mysteries of Hinduism: 10 Captivating Books to
                    Deepen Your Spiritual Quest
                  </h2>
                  <p className="article-text">
                    The term and concept of Hinduism was coined only in recent
                    times. Otherwise, there was really no such thing. The word
                    'Hind...
                  </p>
                  <div className="article-bottom">
                    <p className="article-bottom1">
                      3rd May 2025 at <span>20:35</span>
                    </p>
                    <div className="article-bottom2">
                      <img src={likeIcon} alt="" />{" "}
                      <span>You and 54 Others</span>
                    </div>
                    <div className="article-bottom2">
                      <img src={commentIcon} alt="" /> <span>5 Comments</span>
                    </div>
                    <div className="article-bottom2">
                      <img src={shareIcon} alt="" /> <span>2 Forwrds</span>
                    </div>
                  </div>
                </div>
                <img className="article-img" src={articleImg2} alt="" />
              </div>
            </div>
            <div className="aricle-div">
              <div className="article-head">
                <div className="article-head1">
                  <img src={articleAuthor} alt="" />
                  <p className="article-author">Pragyan Gupta</p>
                  <div className="sage-div00">
                    <img src={scholerIcon} alt="" />
                    <span>SAGE</span>
                  </div>
                </div>
                <img className="save-icon" src={saveIcon} alt="" />
              </div>
              <div className="article-body">
                <div className="aricle-body1">
                  <h2 style={{ cursor: "pointer" }}>
                    Unlocking the Mysteries of Hinduism: 10 Captivating Books to
                    Deepen Your Spiritual Quest
                  </h2>
                  <p className="article-text">
                    The term and concept of Hinduism was coined only in recent
                    times. Otherwise, there was really no such thing. The word
                    'Hind...
                  </p>
                  <div className="article-bottom">
                    <p className="article-bottom1">
                      3rd May 2025 at <span>20:35</span>
                    </p>
                    <div className="article-bottom2">
                      <img src={likeIcon} alt="" />{" "}
                      <span>You and 54 Others</span>
                    </div>
                    <div className="article-bottom2">
                      <img src={commentIcon} alt="" /> <span>5 Comments</span>
                    </div>
                    <div className="article-bottom2">
                      <img src={shareIcon} alt="" /> <span>2 Forwrds</span>
                    </div>
                  </div>
                </div>
                <img className="article-img" src={articleImg1} alt="" />
              </div>
            </div>
          </div>
          <div className="blog-right">
            <p style={{ fontWeight: "600" }}>Topics You May Like</p>
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
            <UshaEvent />
            <div className="follow-div">
              <p className="follow-div-heading">You Can Follow</p>
              <div className="follow-body">
                <div className="follow-div1">
                  <div className="follow-div12">
                    <img src={followPerson1} alt="" />
                    <p style={{ fontWeight: "600" }}>Priya Viswanathan</p>
                  </div>
                  <img className="follow-add-btn00" src={followAdd} alt="" />
                </div>
                <div className="follow-div1">
                  <div className="follow-div12">
                    <img src={followPerson2} alt="" />
                    <p style={{ fontWeight: "600" }}>
                      Sabyasachi Chattopadhyay
                    </p>
                  </div>
                  <img className="follow-add-btn00" src={followAdd} alt="" />
                </div>
                <div className="follow-div1">
                  <div className="follow-div12">
                    <img src={followPerson3} alt="" />
                    <p style={{ fontWeight: "600" }}>Nethan Hedler</p>
                  </div>
                  <img className="follow-add-btn00" src={followAdd} alt="" />
                </div>
                <p style={{textAlign:'center',color:"#1a52b4",fontWeight:"600",marginTop:'10px'}}>See more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
