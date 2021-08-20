import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {

    apiKey: "AIzaSyD8XJfrAH_KON6yghhU0GhSMyNmmylf6Mo",
  
    authDomain: "crown-db-eef55.firebaseapp.com",
  
    projectId: "crown-db-eef55",
  
    storageBucket: "crown-db-eef55.appspot.com",
  
    messagingSenderId: "197155720693",
  
    appId: "1:197155720693:web:f0419a98564e98f90024bc",
  
    measurementId: "G-S557FRBB39"
  
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;