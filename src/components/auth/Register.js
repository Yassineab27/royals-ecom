import React, { useState } from "react";

import { auth, createUserDoc } from "../../firebase/firebase.utils";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      return alert("Please make sure both passwords match!");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDoc(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setPassword2("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="register">
      <h2>You don't have an account ? </h2>
      <h2>Register here</h2>
      <div className="small-underline"></div>
      <p>Please fill in all fields</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="displayName"
          value={displayName}
          placeholder="Name"
          onChange={e => setDisplayName(e.target.value)}
          required
        />
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
          minLength="6"
          required
        />
        <input
          type="password"
          name="password2"
          value={password2}
          placeholder="Confirm Password"
          onChange={e => setPassword2(e.target.value)}
          minLength="6"
          required
        />
        <button className="btn btn-block">Register</button>
      </form>
    </div>
  );
};

export default Register;
