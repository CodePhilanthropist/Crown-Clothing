import React from "react";
import "./custom-button.styles.scss";

export const CustomButton = ({ children, ...otherProps }) => {
  return <button className="custom-button" {...otherProps}>Submit</button>;
};
