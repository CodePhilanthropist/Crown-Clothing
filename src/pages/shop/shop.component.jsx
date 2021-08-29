import React from "react";

import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default ShopPage;
