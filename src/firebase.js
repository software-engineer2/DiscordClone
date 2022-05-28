import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCi3lZoD1uClJSGVU0yAA-afSRym9f_4ys",
  
    authDomain: "discord-clone-dc.firebaseapp.com",
  
    projectId: "discord-clone-dc",
  
    storageBucket: "discord-clone-dc.appspot.com",
  
    messagingSenderId: "562474802370",
  
    appId: "1:562474802370:web:903cb7029d051cdadbaf5b",
  
    measurementId: "G-ENKWP6BXP6"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };