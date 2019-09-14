import React from "react";
import { connect } from "react-redux";
import { selectMainSections } from "../selectors/menuMainDataSelectors";

import MenuItem from "./MenuItem";

const MenuMain = props => {
  const sections = props.sections.map(section => (
    <MenuItem section={section} key={section.id} />
  ));

  return <div className="menu-main">{sections}</div>;
};

const mapStateToProps = state => {
  return { sections: selectMainSections(state) };
};

export default connect(mapStateToProps)(MenuMain);
