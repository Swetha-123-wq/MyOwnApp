import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDYknt5W2ztRD99ycYspxzLlngDsE_ZXDI",
  authDomain: "museub-b5511.firebaseapp.com",
  databaseURL: "https://museub-b5511.firebaseio.com",
  projectId: "museub-b5511",
  storageBucket: "museub-b5511.appspot.com",
  messagingSenderId: "833118559808",
  appId: "1:833118559808:web:860e5670cca2cf5b7d09a5"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
