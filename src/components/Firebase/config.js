import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCLbQh8h8ILes08XXds40U6FNl-Xo7u0fc",
    authDomain: "musician-ai.firebaseapp.com",
    databaseURL: "https://musician-ai.firebaseio.com",
    projectId: "musician-ai",
    storageBucket: "musician-ai.appspot.com",
    messagingSenderId: "1040193026135",
    appId: "1:1040193026135:web:31faed6d3a37a6d2f94b12",
    measurementId: "G-6J8XHDBY0C"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
export default firebase;