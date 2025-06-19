import React from "react";
import "./SignUp.css";
import signupLogo from "../../../assets/USA New Logo 1 2.png";
import userLogo from "../../../assets/User Icon 2.png";
import emailLogo from "../../../assets/Msg Icon 2.png";
import passwordLogo from "../../../assets/noun-key-5633618 3.png";
import phoneLogo from "../../../assets/Voice Call 3.png";
import downBtn from "../../../assets/Polygon 3.png";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="signup-form">
        <div className="signup-form-header">
          <div className="cross-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <p className="sign-up-heading">Sign up now!</p>
          <button className="signup-btn">Sign Up</button>
        </div>
        <div className="signup-form-body">
          <div className="signup-body-head">
            <img src={signupLogo} alt="" />
            <p className="usha-foundation">USHA FOUNDATION</p>
            <p className="usha-foundation-subheading">
              Universal Spiritual Human Awakening
            </p>
          </div>
          <div className="signup-form-body2">
            <div className="form-group">
              <div className="first-name-input">
                <img src={userLogo} alt="" />
                <div className="separate-div"></div>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="first-name-input">
                {/* <img src={userLogo} alt="" />
                  <div className="separate-div"></div> */}
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div
              className="first-name-input"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <img src={emailLogo} alt="" />
              <div className="separate-div"></div>
              <input type="text" placeholder="Email Id" />
            </div>

            <div className="form-group" style={{ marginTop: "20px" }}>
              <div className="first-name-input">
                <img src={phoneLogo} alt="" />
                <div className="separate-div"></div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="first-name-input">
                <img src={downBtn} alt="" />
                <div className="separate-div"></div>
                <input type="text" placeholder="Country Name" />
              </div>
            </div>

            <div
              className="first-name-input"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <img src={passwordLogo} alt="" />
              <div className="separate-div"></div>
              <input type="text" placeholder="Password" />
            </div>

            <div
              className="first-name-input"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <img src={passwordLogo} alt="" />
              <div className="separate-div"></div>
              <input type="text" placeholder="Confirm Password" />
            </div>
          </div>
          <p className="already">
            Already have an Account! Please{" "}
            <NavLink to="/login">Log In</NavLink>
          </p>
          <p className="privacy-policy">
            By signing up, I accept the USHA <span>Terms & Conditions</span>{" "}
            <br />
            and <span>Privacy & Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
