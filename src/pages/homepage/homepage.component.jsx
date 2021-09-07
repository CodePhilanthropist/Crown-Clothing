import React from "react";
import './homepage.styles.scss'; 
import Directory from "../../components/directory/directory.component";
import headerComponent from "../../components/header/header.component";

const Homepage = () => (
  <div className="homepage">
    <Directory/>
  </div>
);

export default Homepage;