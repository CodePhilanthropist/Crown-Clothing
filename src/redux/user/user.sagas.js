import {takeLatest, put} from "redux-saga/effects";
import UserActionTypes from "./user.types";

export function* signInWithGoogle

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START)
}