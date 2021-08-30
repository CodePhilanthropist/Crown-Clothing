import React from "react";
import { Route } from "react-router-dom";

import collectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../category/category.component";

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={collectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category}/>
    </div>
  );
};

export default ShopPage;
