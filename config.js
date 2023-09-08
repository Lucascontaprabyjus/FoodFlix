import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC18KSbFJCA_gZFesKLBHIK4yQbgi4Nciw",
  authDomain: "foodflix-34385.firebaseapp.com",
  projectId: "foodflix-34385",
  storageBucket: "foodflix-34385.appspot.com",
  messagingSenderId: "331707916941",
  appId: "1:331707916941:web:4414a619acb96832d3f8c4"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default  firebase.database()