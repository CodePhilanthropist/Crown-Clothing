import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (error) {
    console.error(error);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START);
}
