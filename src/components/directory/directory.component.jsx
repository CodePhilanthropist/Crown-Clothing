import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";

const Directory = () => {
  return (
    <div className="directory-menu">
      {this.state.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
