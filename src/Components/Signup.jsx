import React from "react";
import './style.css';


const Signup = () => {
  return (
    <div className="centered">
      <div className="text-center mb-7">
        <h2 className="text-warning">Hello</h2>
        <h1 className="text-dark">SignUp</h1>
      </div>
      {/* Form */}
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputname">First Name</label>
            <input type="text" className="form-control" id="inputname" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputname">Last Name</label>
            <input type="text" className="form-control" id="inputname" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Shop Name</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Enter Shop Name"/>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" for="inlineRadio1">
          I am a vendor
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" for="inlineRadio2">
            I am a customer
          </label>
        </div>
        <small id="emailHelp" className="form-text text-muted">
          your personal data will be used to support your experience throughout
          the website
        </small>
        <br/>
        <button type="submit" className="btn btn-warning">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
