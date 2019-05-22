import * as firebase from 'firebase'

//initialize firebase
const config = {
    apiKey: "AIzaSyC4aIIzSIKXO-MxHMihJuOeeqSnKkmElXI",
    authDomain: "dashboard-27d73.firebaseapp.com",
    databaseURL: "https://dashboard-27d73.firebaseio.com",
    projectId: "dashboard-27d73",
    storageBucket: "dashboard-27d73.appspot.com",
    messagingSenderId: "264406961213",
};

firebase.initializeApp(config);

const db = firebase.firestore();
console.log('firebae db:',db);

// const databaseRef = firebase.database().ref();
// console.log('db ref:',databaseRef);

export default db;