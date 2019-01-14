import * as firebase from 'firebase';

// let dotenv = require('dotenv').config({ path: '.env.development' });
// console.log(333, dotenv)

// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
//   };


var config = {
    apiKey: "AIzaSyBcFqf3Zor0uewOgCiC4fW-KjTORZd3X70",
    authDomain: "expensify-6cb80.firebaseapp.com",
    databaseURL: "https://expensify-6cb80.firebaseio.com",
    projectId: "expensify-6cb80",
    storageBucket: "expensify-6cb80.appspot.com",
    messagingSenderId: "741507076406"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };