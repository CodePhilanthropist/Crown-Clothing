import { takeEvery } from "redux-saga/effects";

import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fire");
  collectionRef
    .get()
    .then(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
