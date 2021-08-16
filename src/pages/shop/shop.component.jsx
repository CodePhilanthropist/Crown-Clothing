import React, { Component } from "react";
import shopData from "./shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
