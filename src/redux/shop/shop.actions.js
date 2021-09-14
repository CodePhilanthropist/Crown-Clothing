import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
  payload: collectionsMap,
});
