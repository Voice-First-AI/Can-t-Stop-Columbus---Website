import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCravd03Ehu4B0H7Rpm2BXv-rHtQS1h5Eg",
    authDomain: "cantstopcolumbus.firebaseapp.com",
    databaseURL: "https://cantstopcolumbus.firebaseio.com",
    projectId: "cantstopcolumbus",
    storageBucket: "cantstopcolumbus.appspot.com",
    messagingSenderId: "988752627379",
    appId: "1:988752627379:web:b4db2b03ba65e86f5012c6",
    measurementId: "G-NRNHMP537H"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
export default firebase;