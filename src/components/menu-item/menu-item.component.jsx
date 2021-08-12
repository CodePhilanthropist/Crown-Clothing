import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => (
  <div
    style={{
      backgroundImage: imageUrl,
    }}
    className="menu-item"
  >
    <div className="content">
      <h1>{title}</h1>
      <span>Shop now</span>
    </div>
  </div>
);

export default MenuItem;
