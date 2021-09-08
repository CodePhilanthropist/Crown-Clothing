import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

export const CustomButton = ({...props, children}) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};
