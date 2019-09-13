import React from "react";
import { connect } from "react-redux";

import { selectAlertInfo } from "../selectors/alertSelector";
import { removeAlert } from "../../actions";

const Alert = ({ alert, removeAlert }) => {
  if (alert) {
    setTimeout(() => {
      removeAlert();
    }, 4000);
    return (
      <div className={`alert alert-${alert.type}`}>
        <h3>{alert.msg}</h3>
      </div>
    );
  }
  return null;
};

const mapStateToProps = state => {
  return { alert: selectAlertInfo(state) };
};

export default connect(
  mapStateToProps,
  { removeAlert }
)(Alert);
