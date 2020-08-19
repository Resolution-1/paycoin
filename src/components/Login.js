import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div className="textbox">
            <input type="email" placeholder="Email" name="" value=""></input>
          </div>
          <div className="textbox">
            <input type="text" placeholder="Pass" name="" value=""></input>
          </div>
          <input className="b" type="button" value="Sign in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
