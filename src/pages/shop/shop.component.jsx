import React from "react";

import collectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview/>
    </div>
  );
};



export default ShopPage;
