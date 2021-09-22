import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
  } catch (error) {
    console.error(error);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
