import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDe53Xxvqqjf84Ljwag05Gxo3Am3bobb3Y",
    authDomain: "todo-list-cb7e0.firebaseapp.com",
    databaseURL: "https://todo-list-cb7e0-default-rtdb.firebaseio.com",
    projectId: "todo-list-cb7e0",
    storageBucket: "todo-list-cb7e0.appspot.com",
    messagingSenderId: "543198199314",
    appId: "1:543198199314:web:aac8faf755227a7dc322cb",
    measurementId: "G-Y9KVP5F7ET"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;