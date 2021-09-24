import React, { useState } from "react";
import {
  validEmail,
  validPassword,
  validFirstName,
  validLastName,
  validShopName,
} from "./Regex";
import "./style.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [shopName, setShopName] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [shopNameError, setShopNameError] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
    if (!validFirstName.test(firstName)) {
      setFirstNameErr(true);
    }
    if (!validLastName.test(lastName)) {
      setLastNameError(true);
    }

    if (!validShopName.test(shopName)) {
      setShopNameError(true);
    }
  };

  return (
    <div className="centered" style={{marginTop:"60px"}}>
      <div className="text-center mb-7">
        <h2 className="text-warning">Hello</h2>
        <h1 className="text-dark">SignUp</h1>
      </div>
      <br />
      {/* Form */}
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              placeholder="Enter First Name"
              value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              placeholder="Enter Last Name"
              value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter Email"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Enter Password"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Shop Name</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Enter Shop Name"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
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
        <br />
        <button type="submit" className="btn btn-warning" onClick={validate}>
          SignUp
        </button>
      </form>
      {emailErr && <p>Your Email is invalid</p>}
      {pwdError && <p>Your Password is invalid</p>}
      {firstNameErr && <p>Your FirstName is invalid</p>}
      {lastNameError && <p>Your LastName is invalid</p>}
      {shopNameError && <p>Your ShopName is invalid</p>}
    </div>
  );
};

export default Signup;
