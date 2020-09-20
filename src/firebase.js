import firebase from 'firebase/app'
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt-p4Oh8OlYjUaottdb82kaNhOF70fw2c",
  authDomain: "tik-tok-5b14c.firebaseapp.com",
  databaseURL: "https://tik-tok-5b14c.firebaseio.com",
  projectId: "tik-tok-5b14c",
  storageBucket: "tik-tok-5b14c.appspot.com",
  messagingSenderId: "145189705347",
  appId: "1:145189705347:web:6c384520bce86e11622db6",
  measurementId: "G-M6BD8YTSK0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;


