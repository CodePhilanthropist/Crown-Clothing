import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
