import React, { useState } from "react";

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
        <button className="btn btn-block">Sign in with google</button>
      </form>
    </div>
  );
};

export default Login;
