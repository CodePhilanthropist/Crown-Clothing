import React from "react";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {
          label?
          <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>

          </label>
          : null
      }
    </div>
  );
};
