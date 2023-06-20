  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDevIfyyVVdSogw54ssEiIMmGwrQv-IiFs",
    authDomain: "lisa-f066b.firebaseapp.com",
    projectId: "lisa-f066b",
    storageBucket: "lisa-f066b.appspot.com",
    messagingSenderId: "26946599562",
    appId: "1:26946599562:web:b5458e9622e12e73044b73",
    measurementId: "G-9X0ZC5R22C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function RedChose(){
    firebase.database().ref("User").set({
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
    })
}