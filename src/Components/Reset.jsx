import React, { useState } from "react";
import { validEmail } from "./Regex";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
  };
  return (
    <div className="container" style={{textAlign:"center"}}>
      <div className="row">
        <div className="col-md-12 col-md-offset-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="text-center">
                <h3>
                  <i className="fa fa-lock fa-4x"></i>
                </h3>
                <h2 className="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <br/>
                <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-envelope color-blue"></i>
                        </span>
                        <input
                          id="email"
                          name="email"
                          placeholder="Enter your Email Address"
                          className="form-control"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        name="recover-submit"
                        className="btn btn-lg btn-warning btn-block"
                        value="Reset Password"
                        type="submit"
                        onClick={validate}
                      />
                    </div>

                    {/* <input
                      type="hidden"
                      className="hide"
                      name="token"
                      id="token"
                      value=""
                    /> */}
                  </form>
                  {emailErr && <p>Your email is invalid</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
