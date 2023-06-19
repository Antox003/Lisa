// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCD3Cznnj-CqB40UxKtKgrQNMEpgtVc3s",
  authDomain: "lisa-48d37.firebaseapp.com",
  projectId: "lisa-48d37",
  storageBucket: "lisa-48d37.appspot.com",
  messagingSenderId: "462001363543",
  appId: "1:462001363543:web:588ac07380bd3de75ea112",
  measurementId: "G-TSVCB3DEF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function RedChose(){
    var i=0;
    firebase.database().ref("Carte").set({
        i:i+1,
        rosso: document.getElementById("rosso").value
    })
}