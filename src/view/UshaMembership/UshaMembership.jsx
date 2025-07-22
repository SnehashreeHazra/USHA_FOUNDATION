import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";

const UshaMembership = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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

        <div className="trusted-users">
          <p className="trusted-user-heading">
            Trusted by <span>Users Worldwide</span>
          </p>
          <div className="trusted-users-cards-wrapper">
            <div className="trusted-user-card"></div>
            <div className="trusted-user-card"></div>
            <div className="trusted-user-card"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UshaMembership;
