import React from "react";
import { Route } from "react-router-dom";

import collectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Route exact path="" component={collectionsOverview} />
    </div>
  );
};

export default ShopPage;
