import React from "react";
import bookImg from "../../assets/GSR 1.png";
import authorImg from "../../assets/Pinaki Gangopadhyay 1.png";
import reviewImg from "../../assets/Group 25.png";
import scholerIcon from "../../assets/Scholar Icon 4.png";

const BookDetails = () => {
  return (
    <div className="book-details">
      <div className="book">
        <div className="book-left">
          <img src={bookImg} alt="" />
        </div>
        <div className="book-right">
          <h2>
            God, Science and Reality: Audacity of Reason, Tenacity of Truth
          </h2>
          <div>
            <p>
              by <span>Pinaki Gangopadhyay</span>
            </p>
            <div className="line00"></div>
            <p>20 March 2025</p>
          </div>
          <div className="starts-div">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i> <span>(120)</span>
          </div>
          <div className="card-bottom-div">
            <div className="card-bottom-div1">
              <p>
                Get it by <span>Thursday, 22 May</span>
              </p>
              <p>FREE Delivery over ₹499.</p>
            </div>
            <div className="card-bottom-div2">
              <p>₹450.00</p>
              <p>*GST Included</p>
            </div>
          </div>
          <div className="btns-div">
            <button style={{ backgroundColor: "#1a52b4", color: "white" }}>
              Buy Now
            </button>
            <button style={{ color: "#929292" }}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="des-div00">
        <p className="description">Description</p>

        <p className="desc-para">
          Delve into the profound insights of 'God, Science and Reality' by
          Pinaki Gangopadhyay, a thought-provoking exploration of the audacity
          of reason and the tenacity of truth. This compelling work seamlessly
          interweaves the realms of science, spirituality, and philosophy,
          offering a unique perspective on the modern scientific reality.
          Gangopadhyay masterfully navigates the complexities of audacity,
          reason, and tenacity, inviting readers on a captivating journey to
          transcend their ordinary perceptions and unravel the intricate
          connections between science and spirituality. With a harmonious blend
          of wisdom and intellect, this volume promises to leave an indelible
          mark, challenging conventional thinking and igniting a thirst for a
          deeper understanding of the universe's profound mysteries.
        </p>

        <p className="description">Details of The book</p>
        <div className="product-details">
          <p>
            <span>Publisher :</span>{" "}
            <a href="#">BookPeckers Publishing (22 October 2024)</a>
          </p>
          <p>
            <span>Language :</span> <a href="#">English</a>
          </p>
          <p>
            <span>Paperback :</span> <a href="#">372 pages</a>
          </p>
          <p>
            <span>Item Weight :</span> <a href="#">550 g</a>
          </p>
          <p>
            <span>Dimensions :</span> <a href="#">20.32 x 12.7 x 20.32 cm</a>
          </p>
          <p>
            <span>Country of Origin :</span> <a href="#">India</a>
          </p>
          <p>
            <span>Packer :</span> <a href="#">Delhi</a>
          </p>
          <p>
            <span>Generic Name :</span> <a href="#">Book</a>
          </p>
          <p>
            <span>Customer Reviews:</span>
            <span className="stars">★ ★ ★ ★ ☆</span>
            <span className="review-count">[120]</span>
          </p>
        </div>

        <p className="description">Author Bio</p>
        <div className="author-bio-div">
          <p>
            Pinaki Gangopadhyay is a distinguished author, scholar, and speaker
            with a deep passion for literature, philosophy, and cultural
            studies. His works often explore the intersections of mythology,
            spirituality, and social realities, offering readers profound
            insights and fresh perspectives. An advocate of Indology and
            Sanskrit, he frequently speaks at forums such as the Ramakrishna
            Mission, where he promotes the scientific and philosophical aspects
            of ancient Indian texts, including the Vedas and Puranas.
          </p>
          <img src={authorImg} alt="" />
        </div>
      </div>
      <p className="description">Reviews</p>
      <div className="reviews-div">
        <div className="reviews-div-head">
          <div className="review-person">
            <img src={reviewImg} alt="" />
            <p className="review-profile-name">Priya Viswanathan</p>
          </div>
          <div className="scholer-icon">
            <img src={scholerIcon} alt="" />
            <span>SEEKER</span>
          </div>
          <div className="starts-div00">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="learn-text">Learn What is the ultimate reality</p>
        </div>
        <p className="review-para">
          This book helps those who are trying to seek transcendental knowledge
          and emphasize them onto understanding " what is the ultimate reality"
          of all the things the author interestingly invokes the question of
          what is supernatural, is it other worldly of something that we have
          forgotten over the years. It tries these precepts which are not
          actually lost but needs to be encouraged to understand the science
          behind it
        </p>
        <p
          style={{
            color: "#7D7D7D",
            fontSize: "14px",
            paddingBottom: "20px",
            marginLeft: "55px",
          }}
        >
          Another puzzle that the author adds to the spiritual enhancement is
          understanding the human race and their greatest weapon which is the
          mind. It invokes the ability to understand. The author writes on all
          possible subjects like reality, humankind, science, god, religion etc.
          In this the author gives possible examples and rational explanation to
          understand the orders of the universe, various themes that we come
          across in this.
        </p>
        <div className="like-reply-div">
          <p>2w</p> <p>Like</p> <p>Reply</p>
        </div>
        <div className="see-more-btn">See More</div>
      </div>
    </div>
  );
};

export default BookDetails;
