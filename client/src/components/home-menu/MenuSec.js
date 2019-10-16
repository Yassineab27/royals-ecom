import React from "react";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import { selectSecSections } from "../selectors/menuSecDataSelectors";

const MenuSec = props => {
  const sections = props.sections.map(section => (
    <MenuItem key={section._id} section={section} />
  ));
  return <div className="menu-secondary">{sections}</div>;
};

const mapStateToProps = state => {
  return { sections: selectSecSections(state) };
};

export default connect(mapStateToProps)(MenuSec);
