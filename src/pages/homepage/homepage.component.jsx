import React from "react";
import './homepage.styles.scss'; 
import Directory from "../../components/directory/directory.component";
import HomePageContainer from "./homepage.styles";

const Homepage = () => (
  <div className="homepage">
    <Directory/>
  </div>
);

export default Homepage;