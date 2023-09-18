import firebase from 'firebase';
const firebaseConfig = { apiKey: "AIzaSyAxVxqMN-MepsVU01GgqeqaHqzpgvUPNyw", authDomain: "teste-5cd42.firebaseapp.com", projectId: "teste-5cd42", storageBucket: "teste-5cd42.appspot.com", messagingSenderId: "330197575409", appId: "1:330197575409:web:c17cb2df5bd88846ffab50" };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default  firebase.database()