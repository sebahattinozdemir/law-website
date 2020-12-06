import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAkB2tD_YMLpnJff-H2jQIH1Dg8au49xo",
    authDomain: "narhukukdanismanlikdb.firebaseapp.com",
    projectId: "narhukukdanismanlikdb",
    storageBucket: "narhukukdanismanlikdb.appspot.com",
    messagingSenderId: "131333105752",
    appId: "1:131333105752:web:59e09fe0ce0e833649022d",
    measurementId: "G-6WCZTXRX2V"
});

const db = firebaseApp.firestore();

export default db;