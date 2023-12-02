import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA0YRfFIrWygj2jAOmHQEK-hvD6Qt3Q7iU",
  authDomain: "clone-f7e45.firebaseapp.com",
  projectId: "clone-f7e45",
  storageBucket: "clone-f7e45.appspot.com",
  messagingSenderId: "992873428679",
  appId: "1:992873428679:web:10632a0d06de0aa1d2f0e2",
  measurementId: "G-KB1EJD1218",
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const auth=firebase.default.auth();
const db = firebaseApp.firestore()


export { auth ,db };
