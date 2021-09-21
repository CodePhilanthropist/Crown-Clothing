import { takeEvery, call } from "redux-saga/effects";

import shopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionFailure } from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("I am fire");
  const collectionRef = firestore.collection("collections");
  const snapshot = yield collectionRef.get()
  const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

  // collectionRef
  //   .get()
  //   .then(async (snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
