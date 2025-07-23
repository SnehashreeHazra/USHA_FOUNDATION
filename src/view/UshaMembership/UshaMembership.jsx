import React, { useEffect, useState } from "react";
import "./UshaMembership.css";
import yellowArrow from "../../assets/Group 194.png";
import originalIcon from "../../assets/OTT & live Icon 8 2.png";
import marketIcon from "../../assets/Marketplace 1.png";
import socialIcon from "../../assets/Feed_ 1 1.png";
import ushaReseachIcon from "../../assets/Research 5.png";
import insightsIcon from "../../assets/Blogging 1.png";
import gurukulIcon from "../../assets/Learning 6.png";
import greyArrow from "../../assets/Arrow 42.png";
import brownArrow from "../../assets/Arrow 45.png";
import smalltick from "../../assets/Tick 22.png";
import smallcross from "../../assets/Cross 1.png";
import starIcon from "../../assets/Star 1.png";
import userImg from "../../assets/User Icon 2.png";
import bigTickIcon from "../../assets/Tick 18.png";
import subscribeBtn from "../../assets/Group 190.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";
import YearlyplanBill from "./YearlyplanBill";

const UshaMembership = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [showYearBill, setShowYearBill] = useState(false)
  const navigate = useNavigate();
  return (
    <div className="usha-membership">
      <div className="donation-banner">
        <div className="uni-container about-container0">
          <div className="mission-why-usha-btn">
            <span onClick={() => navigate("/usha-donate")}>Donate</span>{" "}
            <span className="active">Membership</span>
          </div>
          <p className="donate-for-our">Choose Your</p>
          <p className="invisible-heading">PATH TO AWAKENING</p>
        </div>
      </div>
      <div className="uni-container">
        <div className="mission-types">
          <div className="usha-ins-topics">
            <img src={socialIcon} alt="" /> <p>Social Feed</p>
          </div>
          <div className="usha-ins-topics">
            <img src={originalIcon} alt="" /> <p>Originals</p>
          </div>
          <div className="usha-ins-topics">
            <img src={insightsIcon} alt="" /> <p>Blog</p>
          </div>
          <div className="usha-ins-topics">
            <img src={marketIcon} alt="" /> <p>Market</p>
          </div>
          <div className="usha-ins-topics">
            <img src={gurukulIcon} alt="" /> <p>Gurukul</p>
          </div>
          <div className="usha-ins-topics">
            <img src={ushaReseachIcon} alt="" /> <p>Research</p>
          </div>
        </div>

        <p className="mission-body-text">
          Whether you're just beginning or deepening your journey, there's a
          space for you. Every soul travels at its own pace. Let USHA walk with
          you.
        </p>

        <div className="pricing-plans-divs">
          <div className="pricing-div">
            <div className="free-plan-div">
              <p>Free Plan</p> <img src={greyArrow} alt="" />
            </div>
            <p className="pricing-big-text">Muktajñānam</p>
            <p className="pricing-small-text">
              Enjoy powerful spiritual tools and features with USHA’s free tier.
            </p>
            <button className="pricing-sign-up-btn">Sign up for Free</button>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" /> <span>Social Feed Connect</span>
            </div>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" /> <span>Messaging</span>
            </div>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" />{" "}
              <span>Books Marketplace Curate</span>
            </div>
            <div className="social-feed-connect feed-grey">
              <img src={smallcross} alt="" /> <span>Blogs (Articles)</span>
            </div>
            <div className="social-feed-connect feed-grey">
              <img src={smallcross} alt="" /> <span>Gurukul Access</span>
            </div>
            <div className="social-feed-connect feed-grey">
              <img src={smallcross} alt="" />{" "}
              <span>USHA Originals Contents</span>
            </div>
          </div>
          <div className="popular-pricing-div">
            <p className="price-most-popular">Most Popular</p>
            <div className="price-inner-div">
              <div className="free-plan-div1">
                <p>Premium Plan</p> <img src={brownArrow} alt="" />
              </div>
              <p className="pricing-big-text">Divyajñānam</p>
              <p className="pricing-small-text">
                Unlock exclusive insights and advanced features with USHA
                Premium Membership.
              </p>
              <button className="pricing-sign-up-btn">Upgrade your plan</button>
              <div className="social-feed-connect feed-brown">
                <img src={smalltick} alt="" /> <span>Social Feed Connect</span>
              </div>
              <div className="social-feed-connect feed-brown">
                <img src={smalltick} alt="" /> <span>Messaging</span>
              </div>
              <div className="social-feed-connect feed-brown">
                <img src={smalltick} alt="" />{" "}
                <span>Books Marketplace Curate</span>
              </div>
              <div className="social-feed-connect feed-brown">
                <img src={smalltick} alt="" /> <span>Blogs (Articles)</span>
              </div>
              <div className="social-feed-connect feed-brown">
                <img src={smalltick} alt="" /> <span>Gurukul Access</span>
              </div>
              <div className="social-feed-connect feed-brown">
                <img src={smalltick} alt="" />{" "}
                <span>USHA Originals Contents</span>
              </div>
            </div>
          </div>
          <div className="pricing-div">
            <div className="free-plan-div">
              <p>Group/Enterprise Plan</p> <img src={greyArrow} alt="" />
            </div>
            <p className="pricing-big-text">Sanghajñānam</p>
            <p className="pricing-small-text">
              Customizable tools, dedicated support, and scalable solutions for
              institutions or collectives.
            </p>
            <button className="pricing-contact-btn">Contact Us</button>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" /> <span>Social Feed Connect</span>
            </div>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" /> <span>Messaging</span>
            </div>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" />{" "}
              <span>Books Marketplace Curate</span>
            </div>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" /> <span>Blogs (Articles)</span>
            </div>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" /> <span>Gurukul Access</span>
            </div>
            <div className="social-feed-connect feed-brown">
              <img src={smalltick} alt="" />{" "}
              <span>USHA Originals Contents</span>
            </div>
          </div>
        </div>
        <p className="all-plans-text">
          All plans are paid upfront. The monthly rate reflects the total plan
          price divided by the number of months in your plan.
        </p>

        <div className="price-special-offer-div">
          <div className="price-special-left">
            <div className="left-offer-div">
              <p>USHA Annual 30% Off</p>
            </div>
            <p className="unlock-heading">
              Unlock the complete spiritual journey
            </p>
            <p className="unlock-heading2">
              USHA Originals, courses, community, and more.
            </p>
            <p className="unlock-heading3">
              Get started as low as <span>₹4/day</span>
            </p>
            <div className="price-subscribe-btn">
              <p>Subscribe to yearly plan</p> <img src={subscribeBtn} alt="" />
            </div>
          </div>
          <div className="price-special-right">
            <div className="plans-div00 " onClick={()=>setShowYearBill(true)}>
              <div className="popular-badge">Most Popular</div>
              <img className="check-circle" src={bigTickIcon} alt="" />
              <div >
                <p className="yearly-heading">Yearly</p>
                <p className="yearly-subheading">Billed yearly</p>
              </div>
              <div>
                <div className="plans-div1">
                  <p className="plans-div1-1">₹149</p>
                  <p className="plans-div1-2">₹99</p>
                </div>
                <p className="per-month-text">(per month)</p>
              </div>
            </div>
            <div className="plans-div">
              <div>
                <p className="yearly-heading">Quarterly</p>
                <p className="yearly-subheading">Billed yearly</p>
              </div>
              <div>
                <div className="plans-div1">
                  <p className="plans-div1-1">₹169</p>
                  <p className="plans-div1-2">₹119</p>
                </div>
                <p className="per-month-text">(per month)</p>
              </div>
            </div>
            <div className="plans-div">
              <div>
                <p className="yearly-heading">Monthly</p>
                <p className="yearly-subheading">Billed yearly</p>
              </div>
              <div>
                <div className="plans-div1">
                  <p className="plans-div1-1">₹149</p>
                  <p className="plans-div1-2">₹99</p>
                </div>
                <p className="per-month-text">(per month)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trusted-users">
          <p className="trusted-user-heading">
            Trusted by <span>Users Worldwide</span>
          </p>
          <div className="trusted-users-cards-wrapper">
            <div className="trusted-user-card">
              <div className="trusted-card-head">
                <div className="trusted-user-img">
                  <img src={userImg} alt="" />
                </div>
                <div>
                  <p className="user-name">Puban Ganguly</p>{" "}
                  <p className="user-desc">Member</p>
                </div>
              </div>
              <div className="trusted-card-body">
                <div className="stars-div">
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                </div>
                <p className="trusted-card-body-text">
                  A wonderful initiative reviving ancient wisdom. Truly grateful
                  to be part of this movement.
                </p>
              </div>
            </div>
            <div className="trusted-user-card">
              <div className="trusted-card-head">
                <div className="trusted-user-img">
                  <img src={userImg} alt="" />
                </div>
                <div>
                  <p className="user-name">Jason Snitch</p>{" "}
                  <p className="user-desc">Member</p>
                </div>
              </div>
              <div className="trusted-card-body">
                <div className="stars-div">
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                </div>
                <p className="trusted-card-body-text">
                  Authentic, insightful, and inspiring. A must-join for anyone
                  passionate about Sanatan Dharma and Vedic knowledge
                </p>
              </div>
            </div>
            <div className="trusted-user-card">
              <div className="trusted-card-head">
                <div className="trusted-user-img">
                  <img src={userImg} alt="" />
                </div>
                <div>
                  <p className="user-name">Santosh Davis</p>{" "}
                  <p className="user-desc">Member</p>
                </div>
              </div>
              <div className="trusted-card-body">
                <div className="stars-div">
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                </div>
                <p className="trusted-card-body-text">
                  Impressed by the research quality and cultural depth. This
                  platform deserves global recognition and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showYearBill && <YearlyplanBill />}
    </div>
  );
};

export default UshaMembership;
