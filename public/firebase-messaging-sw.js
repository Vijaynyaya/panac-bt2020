importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyANeKqLTq_5XB7tDlhz4KO4hv5qWhwBPF8",
  authDomain: "expense-tracker-15102.firebaseapp.com",
  projectId: "expense-tracker-15102",
  storageBucket: "expense-tracker-15102.appspot.com",
  messagingSenderId: "281127844501",
  appId: "1:281127844501:web:3682e4f3c195146fd5799c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();