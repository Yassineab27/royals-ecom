import React, { useState } from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="small-underline"></div>
      <p>Please login with your email and password</p>
      <form className="login-form">
        <input
          className="auth-input"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn btn-block">Sign in</button>
      </form>
      <button onClick={signInWithGoogle} className="btn btn-block btn-google">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
