import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions";

const Contact = props => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.setAlert(
      "Your Message was sent to the support team. Thank you.",
      "success"
    );

    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <h1 className="text-center">
        Contact Us <i className="fas fa-paper-plane color-grey"></i>
      </h1>
      <div className="small-underline" />
      <p className="color-grey text-center m-top">
        If you have any questions do not hesitate to contact us directly through
        the form or through:{" "}
        <span className="color-main">
          <i className="fas fa-envelope-square"></i> team-support@royals.com
        </span>
      </p>
      <p className="color-grey text-center">
        or call us directly:{" "}
        <span className="color-main">
          <i class="fas fa-phone-volume"></i> +7 1254 3659 47
        </span>
      </p>
      <p className="text-center color-success my-1">
        Our support team is at your service 24/7{" "}
        <i className="fas fa-headset"></i>
      </p>
      <form onSubmit={handleSubmit} style={{ width: "70%", margin: "auto" }}>
        <input
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={e => setSubject(e.target.value)}
          required
        />
        <textarea
          rows="5"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />

        <button className="btn btn-block">Submit Message</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { setAlert }
)(Contact);
