import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = ({})


export default Directory;
