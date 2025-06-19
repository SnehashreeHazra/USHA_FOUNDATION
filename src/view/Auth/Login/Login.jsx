import React from "react";
import "./Login.css";
import signupLogo from "../../../assets/USA New Logo 1 2.png";
import userLogo from "../../../assets/User Icon 2.png";
import emailLogo from "../../../assets/Msg Icon 2.png";
import passwordLogo from "../../../assets/noun-key-5633618 3.png";
import phoneLogo from "../../../assets/Voice Call 3.png";
import downBtn from "../../../assets/Polygon 3.png";

const Login = () => {
  return (
    <div className="sign-up">
      <div className="signup-form">
        <div className="signup-form-header">
          <div className="cross-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <p className="sign-up-heading">Welcome Back!</p>
          <button className="signup-btn">Log in</button>
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
            <div className="first-name-input" style={{ width: "100%" }}>
              <img src={userLogo} alt="" />
              <div className="separate-div"></div>
              <input type="text" placeholder="First Name" />
            </div>

            <div
              className="first-name-input"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <img src={passwordLogo} alt="" />
              <div className="separate-div"></div>
              <input type="text" placeholder="Password" />
            </div>
          </div>
          <div className="forgot-remember-me">
            <div style={{ display: "flex", columnGap: "5px" }}>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <p>Forgot Password?</p>
          </div>
          <p className="already" style={{ marginTop: "10px" }}>
            Don't have an Account! Please <span>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
