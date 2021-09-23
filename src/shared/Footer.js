import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <div className="footerwrap">
      <div className="container">
        <div className="row clearfix">
          <div className="col-xs-6 col-sm-3 col-md-2">
            <div className="shoplinksbx">
              <h4>Online Shopping</h4>
              <ul>
                <li>
                  <a href="javascript:void(0);">Men</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Women</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Kids</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Home & Living</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Gift Cards</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-6 col-sm-2 col-md-2">
            <div className="shoplinksbx">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="javascript:void(0);">Contact Us</a>
                </li>
                <li>
                  <a href="javascript:void(0);">FAQ</a>
                </li>
                <li>
                  <a href="javascript:void(0);">T&C </a>
                </li>
                <li>
                  <a href="javascript:void(0);">Terms Of Use</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Track Orders</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Shipping</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Cancellation</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Returns</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearbth"></div>
          <div className="col-xs-6 col-sm-3 col-md-4">
            <div className="shoplinksbx">
              <h4>App on Mobile</h4>
              <div className="downLinkContainer">
                <a href="javascript:void(0);">
                  <img
                    className="androidDownLink"
                    src="assets/images/google_play.png"
                    alt=""
                  />
                </a>
                <a href="javascript:void(0);">
                  <img
                    className="iOSDownLink"
                    src="assets/images/apple_store.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-4">
            <div className="wakipromises">
              <div className="promisesbx">
                <div className="imgsbx">
                  <span className="original"></span>
                </div>
                <div className="promisecon">
                  <span>100% ORIGINAL</span> guarantee for all products at
                  Geekshub
                </div>
              </div>
              <div className="promisesbx">
                <div className="imgsbx">
                  <span className="return"></span>
                </div>
                <div className="promisecon">
                  <span>Return within 30 days</span> of receiving your order{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
