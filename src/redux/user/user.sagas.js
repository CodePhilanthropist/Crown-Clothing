import {takeLatest, put} from "redux-saga/effects";
import UserActionTypes from "./user.types";

import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";

export function* signInWithGoogle(){
    try{
        yield 
    }catch(error){
        console.error(error);
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START)
}