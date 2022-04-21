import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVzwFIFHgHj60zCPzK0WP4K0HKVX9UP38",
  authDomain: "facebook-clone-15f36.firebaseapp.com",
  projectId: "facebook-clone-15f36",
  storageBucket: "facebook-clone-15f36.appspot.com",
  messagingSenderId: "1018910938582",
  appId: "1:1018910938582:web:55783d226fc431718d4077",
  measurementId: "G-4NEV7DZT93"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;