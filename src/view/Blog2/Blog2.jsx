import React from "react";
import "./Blog2.css";
import UshaEvent from "../socialFeed/UshaEvent";
import articleAuthor from "../../assets/Group 3.png";
import scholerIcon from "../../assets/Scholar Icon 4.png";
import saveIcon from "../../assets/noun-save-5791622 1.png";
import articleImg1 from "../../assets/61xzwgm0r-L 1.png";
import articleImg2 from "../../assets/de17dc290a3d91085e2486e7228a870d 1.png";
import likeIcon from "../../assets/like 1 2.png";
import commentIcon from "../../assets/Comments icon 1.png";
import shareIcon from "../../assets/Share 4.png";
import followPerson1 from "../../assets/Group 25 (1).png";
import followPerson2 from "../../assets/image 63.png";
import followPerson3 from "../../assets/image 8 (1).png";
import followPerson4 from "../../assets/image 9 (2).png";
import followAdd from "../../assets/add 2 white.png";
import likeIcon2 from "../../assets/like 1 3.png";
import dislikeIcon from "../../assets/like 1 4.png";

const Blog2 = () => {
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
            <div className="full-article-content">
              <div className="article-head">
                <div className="article-head1">
                  <img src={articleAuthor} alt="" />
                  <p className="article-author">Pragyan Gupta</p>
                  <div className="sage-div00">
                    <img src={scholerIcon} alt="" />
                    <span>SAGE</span>
                  </div>
                </div>
                <div className="article-head2">
                  <img className="save-icon" src={followAdd} alt="" />
                  <img className="save-icon" src={shareIcon} alt="" />
                  <img className="save-icon" src={saveIcon} alt="" />
                </div>
              </div>
              <div className="article-bottom00">
                <p className="article-bottom1">
                  3rd May 2025 at <span>20:35</span>
                </p>
                <div className="article-bottom2">
                  <img src={likeIcon} alt="" /> <span>You and 54 Others</span>
                </div>
                <div className="article-bottom2">
                  <img src={commentIcon} alt="" /> <span>5 Comments</span>
                </div>
                <div className="article-bottom2">
                  <img src={shareIcon} alt="" /> <span>2 Forwrds</span>
                </div>
              </div>
              <h2 className="article-topic">
                The Soul in Daily Life—Hinduism and the Concepts of the Atman
              </h2>
              <p className="article-subheading">
                The term and concept of Hinduism was coined only in recent
                times. Otherwise, there was really no such thing.{" "}
              </p>
              <p className="two-minutes-read">2 Min Read</p>
              <img className="article-page-image" src={articleImg1} alt="" />
              <p className="article-main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fermentum posuere felis. Cras ornare ultrices diam,
                eu pulvinar metus sodales ac. Aenean commodo, justo at ultricies
                tristique, nulla erat pretium libero, at convallis enim metus
                vestibulum turpis. Etiam ex dui, pharetra eu iaculis non, tempor
                nec sapien. Donec dapibus, mauris eget pretium venenatis, turpis
                nunc auctor velit, non pulvinar tellus nunc vitae ipsum. Proin
                porttitor ullamcorper suscipit. Suspendisse non consectetur
                lectus, ac fringilla magna. Morbi rutrum nisi nec facilisis
                sollicitudin. Integer massa elit, tempus eu fermentum ac,
                venenatis in ligula. Vivamus a lobortis felis. In a augue
                blandit nunc iaculis bibendum. Morbi commodo ante sed sem
                finibus, ac euismod dolor aliquam. Duis blandit luctus quam,
                pellentesque lacinia mauris pellentesque ac. Pellentesque mattis
                feugiat quam. Sed mattis sem eget sapien posuere, non aliquet
                diam imperdiet.{" "}
              </p>
              <p style={{ textAlign: "justify" }}>
                Nulla imperdiet dictum lacus, nec tempor ligula dignissim ut.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla ut neque ornare, auctor
                elit non, placerat nunc. In rutrum consequat sem, nec venenatis
                libero cursus eu. Ut eget congue elit, a rutrum velit. Integer
                quis sem volutpat, placerat eros eu, sodales quam. Nullam
                porttitor mollis leo, eget condimentum odio laoreet facilisis.
                Cras commodo mollis sem, ac posuere ipsum interdum non.
                Curabitur vitae arcu ut eros imperdiet dignissim vel sit amet
                erat. Donec rhoncus aliquam nulla, finibus lobortis ante
                tincidunt vel. Proin id tempor leo, ac semper lacus. Aliquam
                interdum ligula quis mauris tempus gravida. Maecenas sed
                suscipit urna. Proin convallis urna id lectus consectetur, at
                dapibus ex tincidunt.
              </p>
              <p style={{ textAlign: "justify" }}>
                Aenean vel tellus ac tortor laoreet sagittis. Fusce euismod est
                eu massa ullamcorper euismod. Mauris fringilla eu tellus sit
                amet tempus. Mauris sit amet quam condimentum, iaculis ante id,
                blandit metus. In hac habitasse platea dictumst. Curabitur et
                ipsum libero. Ut euismod gravida sem, nec accumsan ligula
                tincidunt lacinia. Aenean facilisis massa quam. Ut volutpat
                neque ut turpis hendrerit, fringilla scelerisque nulla aliquam.
                Quisque in gravida orci. Ut aliquet nibh quis laoreet
                vestibulum. Nam a dictum sapien.
              </p>
              <p style={{ textAlign: "justify" }}>
                Aenean sollicitudin facilisis magna, et posuere ex sodales sit
                amet. Cras ex lectus, vehicula nec sagittis et, aliquam eget
                quam. Duis dignissim id enim ac congue. Sed in felis auctor,
                consectetur tortor vel, laoreet quam. Curabitur quis libero
                arcu. Vestibulum pharetra mollis ligula id maximus. Phasellus
                non vestibulum quam. Proin non massa lobortis, bibendum velit
                nec, posuere eros.
              </p>{" "}
              <p style={{ textAlign: "justify" }}>
                Fusce feugiat odio pretium dolor luctus, sit amet varius dolor
                blandit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aliquam eu est nec arcu laoreet luctus vel a risus. Donec
                laoreet, massa eu convallis mollis, mauris augue sagittis
                turpis, id dictum arcu nulla quis sem. Aenean gravida posuere
                lectus id mollis. Nunc non tempor libero. Donec ut lacinia sem,
                eget laoreet arcu.
              </p>
              <div className="blog-topics-div">
                <button>Hinduism</button>
                <button>Atman</button>
                <button>Soul</button>
                <button>Gothic</button>
              </div>
              <hr style={{ margin: "30px 0" }} />
              <div className="article-footer">
                <p>Do you liked this article: </p>
                <div>
                  <img src={likeIcon2} alt="" />
                  <img src={dislikeIcon} alt="" />
                </div>
                <div className="article-footer2">
                  <div className="article-bottom2">
                    <img src={likeIcon} alt="" /> <span>54 Liked</span>
                  </div>
                  <div className="article-bottom2">
                    <img src={commentIcon} alt="" /> <span>5 Comments</span>
                  </div>
                  <div className="article-bottom2">
                    <img src={shareIcon} alt="" /> <span>2 Forwrds</span>
                  </div>
                </div>
                <div className="article-head2">
                  <img className="save-icon" src={followAdd} alt="" />
                  <img className="save-icon" src={shareIcon} alt="" />
                  <img className="save-icon" src={saveIcon} alt="" />
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
