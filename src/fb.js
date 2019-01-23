import firebase from 'firebase/app';
import 'firebase/firestore';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAsFT92d3zAN1hP2rqoIUtXEqbfmlo41no",
    authDomain: "chux-stealth-todo.firebaseapp.com",
    databaseURL: "https://chux-stealth-todo.firebaseio.com",
    projectId: "chux-stealth-todo",
    storageBucket: "chux-stealth-todo.appspot.com",
    messagingSenderId: "679924656269"
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;