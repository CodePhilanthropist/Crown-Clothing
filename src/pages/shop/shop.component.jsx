import React from "react";
import { Route } from "react-router-dom";

import collectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={collectionsOverview} />
    </div>
  );
};

export default ShopPage;
