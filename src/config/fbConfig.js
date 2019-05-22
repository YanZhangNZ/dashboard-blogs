import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//initialize firebase
var config = {
    apiKey: "AIzaSyC4aIIzSIKXO-MxHMihJuOeeqSnKkmElXI",
    authDomain: "dashboard-27d73.firebaseapp.com",
    databaseURL: "https://dashboard-27d73.firebaseio.com",
    projectId: "dashboard-27d73",
    storageBucket: "dashboard-27d73.appspot.com",
    messagingSenderId: "264406961213",
};

firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots:true
});

export default firebase;