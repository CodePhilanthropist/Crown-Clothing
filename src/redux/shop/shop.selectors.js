import { createSelector } from "reselect";

const COLLECTION_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,

}

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
