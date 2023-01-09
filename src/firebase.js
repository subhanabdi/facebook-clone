import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUNTIhZLh5WK9xCOqCLWipRlJA4P4IZ9M",

    authDomain: "facebook-clone-4154b.firebaseapp.com",
  
    projectId: "facebook-clone-4154b",
  
    storageBucket: "facebook-clone-4154b.appspot.com",
  
    messagingSenderId: "1007265301761",
  
    appId: "1:1007265301761:web:6c8c4bee75771816a7c700"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;