import React, { useState } from "react";

import { connect } from "react-redux";
import { loginUser } from "../../actions";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email,
      password
    };
    props.loginUser(user);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="small-underline"></div>
      <p>Please login with your email and password</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-block">Sign in</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { loginUser }
)(Login);
