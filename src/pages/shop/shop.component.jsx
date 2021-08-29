import React from "react";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { selectShopItems } from "../../redux/shop/shop.selectors";

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
  
})

export default ShopPage;
