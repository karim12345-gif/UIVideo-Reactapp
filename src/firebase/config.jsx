
import firebase from "firebase/app";
import 'firebase/auth'


// firebase config object

const config = firebase.initializeApp( {
    apiKey: "AIzaSyB_5SN8eWSMWvX5ECfri5Btp_LWqJGlBlo",
    authDomain: "movie-app-f6eba.firebaseapp.com",
    projectId: "movie-app-f6eba",
    storageBucket: "movie-app-f6eba.appspot.com",
    messagingSenderId: "619408955855",
    appId: "1:619408955855:web:99285df63ba18a006f9aba"
  });



  export const auth = firebase.auth()
  // signing provider with google 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  // signing provider with google 
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default config