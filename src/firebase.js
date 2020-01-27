import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyADeU7SJTv0xRzlcbWYRQNnRFgLidy10kM",
    authDomain: "fenerbahce-fdbbf.firebaseapp.com",
    databaseURL: "https://fenerbahce-fdbbf.firebaseio.com",
    projectId: "fenerbahce-fdbbf",
    storageBucket: "fenerbahce-fdbbf.appspot.com",
    messagingSenderId: "512112672597",
    appId: "1:512112672597:web:07d0d271bc1394fd6f79dc"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  export{
      firebase,
      firebaseMatches
  }
  //firebaseDB.ref('matches').once('value').then((snapshote)=>{
    //  console.log(snapshote.val())
  //})