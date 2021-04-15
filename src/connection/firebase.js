 import firebase from 'firebase/app'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBpysmwG5SnisDVA95iR25m9eDSgCdTC9I",
    authDomain: "reservas-47787.firebaseapp.com",
    projectId: "reservas-47787",
    storageBucket: "reservas-47787.appspot.com",
    messagingSenderId: "333910931737",
    appId: "1:333910931737:web:17a7e4fa99f48d07776d88"
  };
  // Initialize Firebase
  
  const fb =firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore()