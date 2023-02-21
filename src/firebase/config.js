import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2ZluxFSXvKkx9jwI_PxE4dO8Et1fVj_w",
  authDomain: "project-manager-cb59d.firebaseapp.com",
  projectId: "project-manager-cb59d",
  storageBucket: "project-manager-cb59d.appspot.com",
  messagingSenderId: "497514253522",
  appId: "1:497514253522:web:56fce8e36529997eccb10b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
