import React from "react";
import backArrow from "../../assets/Arrow 47.png";
import upiImg from "../../assets/UPI Tag 1.png";
import razorPay from "../../assets/Razorpay_logo 1.png";
import arrow from "../../assets/Arrow 48.png";
import creditCardImg from "../../assets/Credit Debit 1.png";

const DonationBill = () => {
  return (
    <div className="donation-bill-modal">
      <div className="donation-bill">
        <div className="donation-bill-back">
          <img src={backArrow} alt="" />
          <p>Payment Details</p>
        </div>
        <p className="your-account">Your Account:</p>
        <p className="donate-person-email">pragyan.gupta@gmail.com</p>
        <p className="donation-bill">Donation Bill</p>
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
        <p>GST (18%)</p>
        <div>
          <p>Total</p>
          <p>₹1,900.00</p>
        </div>
        <p>Select a payment method</p>
        <p>To avoid payment failure, do noy use a VPN.</p>
        <div>
          <div>
            <img src="" alt="" /> <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" /> <img src="" alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" /> <p>Credit & Debit Cards</p>
          </div>
          <div>
            <img src="" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBill;
