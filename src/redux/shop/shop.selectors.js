import { createSelector } from "reselect";

const COLLECTION_ID = {
  hats: 1,
}

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
