/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <div id="wrapper">
      {/* <!--Header Section Start Here */}
      <nav class="navbar navbar-default navbar-fixed-top nav-down">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              {" "}
              <span class="sr-only">Techugo navigation</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span>{" "}
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">
              Techugo logo
            </a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">LATEST PRODUCTS</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
            </ul>
          </div>

          <div class="headerrtsnav">
            <ul class="nav navbar-nav">
              <li>
                <a href="#">
                  <span class="stores"></span>Stores
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="account"></span>Account
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="cart"></span>Cart<i class="notif_num">10</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="overlaybg"></div>
      </nav>
    </div>
  );
};

export default Navbar;
