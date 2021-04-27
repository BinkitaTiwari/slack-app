import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyA-Aw3dfctNaXXXWDYzQ9L9Z4qawGUV7cs",
    authDomain: "slack-app-38bff.firebaseapp.com",
    projectId: "slack-app-38bff",
    storageBucket: "slack-app-38bff.appspot.com",
    messagingSenderId: "1000536932417",
    appId: "1:1000536932417:web:bf149fc68bf05f9b2bc6c0",
    measurementId: "G-WD3KYC5QH3",
    databaseURL: "https://slack-app-38bff-default-rtdb.firebaseio.com/"
  };

  firebase.initializeApp(config);

  export default firebase;