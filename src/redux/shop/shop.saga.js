import { takeEvery } from "redux-saga/effects";

import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync(){
    
}

export function* fetchCollectionsStart(){
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, )
}