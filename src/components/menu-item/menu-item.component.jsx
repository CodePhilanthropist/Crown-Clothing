import React from "react";

const MenuItem = ({title}) => (
  <div className="menu-item">
    <div className="content">
      <h1>{title}</h1>
      <span>Shop now</span>
    </div>
  </div>
);

export default MenuItem;