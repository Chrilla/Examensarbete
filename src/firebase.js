import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAKsy3QFnVCX0BMEbjIaf2s-RSyc-RxDzQ",
    authDomain: "premier-league-hub.firebaseapp.com",
    projectId: "premier-league-hub",
    storageBucket: "premier-league-hub.appspot.com",
    messagingSenderId: "344711668995",
    appId: "1:344711668995:web:10bfaefec09c29e39bb536",
});

const db = firebaseApp.firestore();

export { db };