import React, { Component } from "react";
import {shopData} from "./shop.data";
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }
  render() {
    return <div></div>;
  }
}
