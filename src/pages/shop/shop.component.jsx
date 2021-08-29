import React, { Component } from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

export default const = () => {
  
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
