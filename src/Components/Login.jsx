import React, { useState } from "react";
import { validEmail, validPassword } from "./Regex";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };

  return (
    <div className="centered" style={{marginTop:"20px"}}>
      <div className="text-center mb-7">
        <h2 className="text-warning">Login to your account</h2>
      </div>
      {/* Form */}
      <br />
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-auto my-1">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="autoSizingCheck2"
            />
            <label className="form-check-label" for="autoSizingCheck2">
              Remember me
            </label>
          </div>
        </div>
        <br />

        <div className="col-auto my-1">
          <a href="reset" id="forgot-link">
            Forgot Password?
          </a>
        </div>
        <br />
        <button type="submit" className="button button4" onClick={validate}>
          Login
        </button>
        {emailErr && <p>Your email is invalid</p>}
        {pwdError && <p>Your password is invalid</p>}
        <br />
      </form>
    </div>
  );
};

export default Login;
