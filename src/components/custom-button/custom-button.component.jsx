import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return <CustomButtonContainer>{children}</CustomButtonContainer>;
};
