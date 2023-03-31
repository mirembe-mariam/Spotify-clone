import React from "react";
import "./Login.css";
import { loginUrl } from '../spotify.js';
function Login() {
  return (
    <div className="login">
      <img
        src="https://assets.website-files.com/5f090a0b0057b96b71351a8f/5fb5798f195d8b87e4b94bed_Sptoify-logo-vertical-with-text-on-black.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

     
    </div>
  );
}

export default Login;
