import React from "react";
import backArrow from "../../assets/Arrow 47.png";
import upiImg from "../../assets/UPI Tag 1.png";
import razorPay from "../../assets/Razorpay_logo 1.png";
import arrow from "../../assets/Arrow 48.png";
import creditCardImg from "../../assets/Credit Debit 1.png";

const YearlyplanBill = () => {
  return (
    <div className="donation-bill-modal">
      <div className="donation-bill">
        <div className="donation-bill-back">
          <img src={backArrow} alt="" />
          <p>Payment Details</p>
        </div>
        <p className="your-account">Your Account:</p>
        <p className="donate-person-email">pragyan.gupta@gmail.com</p>
        <p className="donation-bill-heading">Donation Bill</p>
        <div className="total-amount-div">
          <p>Total Amount</p>
          <p>₹2,001.00</p>
        </div>
        <div className="discount-div">
          <p>Discount</p>
          <p>- ₹101.00</p>
        </div>
        <div className="total-amount-div">
          <p>Subtotal</p>
          <p>₹1,900.00</p>
        </div>
        <p className="gst">GST (18%)</p>
        <div className="total-div">
          <p>Total</p>
          <p>₹1,900.00</p>
        </div>
        <p className="select-text">Select a payment method</p>
        <p className="avoid-text">
          To avoid payment failure, do noy use a VPN.
        </p>
        <div className="upi-pay">
          <div className="upi-pay-div1">
            <img src={upiImg} alt="" /> <p>UPI & Cards</p>
          </div>
          <div className="upi-pay-div1">
            <img src={razorPay} alt="" /> <img src={arrow} alt="" />
          </div>
        </div>
        <div className="upi-pay">
          <div className="upi-pay-div1">
            <img src={creditCardImg} alt="" /> <p>Credit & Debit Cards</p>
          </div>
          <img src={arrow} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default YearlyplanBill;
