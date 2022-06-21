import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyALkt7nmY-ow4VQBSVTiuO4SbqVm8T2vFM",
    authDomain: "linkedin-meversion.firebaseapp.com",
    projectId: "linkedin-meversion",
    storageBucket: "linkedin-meversion.appspot.com",
    messagingSenderId: "132462691563",
    appId: "1:132462691563:web:fad478f9f55619d99feaae"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};