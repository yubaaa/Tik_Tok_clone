import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD75Dv3KCJTCuzZD9sDO6DRwJ4OlOIIuxI",
    authDomain: "tik-tok-clone-82ee6.firebaseapp.com",
    projectId: "tik-tok-clone-82ee6",
    storageBucket: "tik-tok-clone-82ee6.appspot.com",
    messagingSenderId: "387927806674",
    appId: "1:387927806674:web:3217f564ad2e0efaf5d30b",
    measurementId: "G-WNS4BHN7H5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;