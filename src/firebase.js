import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnj_UMsYUEg4ueGO3AFlD2y7IiOJC9H8A",
  authDomain: "facebook-messenger-clone-6b969.firebaseapp.com",
  projectId: "facebook-messenger-clone-6b969",
  storageBucket: "facebook-messenger-clone-6b969.appspot.com",
  messagingSenderId: "1058253752246",
  appId: "1:1058253752246:web:5da0cb459b048fe37a2317",
  measurementId: "G-6LED2WM4XM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
