import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyAb-glAxpxu_3z_b6fexVnbk0kxd3NrfuM",
    authDomain: "sos-app-3c06f.firebaseapp.com",
    databaseURL: "https://sos-app-3c06f.firebaseio.com",
    projectId: "sos-app-3c06f",
    storageBucket: "sos-app-3c06f.appspot.com",
    messagingSenderId: "222871257859"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase,database as default}; 