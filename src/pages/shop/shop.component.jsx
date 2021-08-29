import React from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const ShopPage = () => {
  
  const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
}

export default ShopPage;