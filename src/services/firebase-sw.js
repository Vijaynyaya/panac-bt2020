import { initializeApp} from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyANeKqLTq_5XB7tDlhz4KO4hv5qWhwBPF8",
  authDomain: "expense-tracker-15102.firebaseapp.com",
  projectId: "expense-tracker-15102",
  storageBucket: "expense-tracker-15102.appspot.com",
  messagingSenderId: "281127844501",
  appId: "1:281127844501:web:3682e4f3c195146fd5799c"
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

export function configureNotification() {
  Notification.requestPermission().then(permission => {
    console.log(permission)
    if(permission === 'granted') {
      getToken(messaging).then(token => {
        if(token) {
          console.log("[TOKEN]", token)
        } else {
          console.log("[TOKEN] N/A")
        }
      })
      .catch(err => console.log("[TOKEN] ERR", err))
    }
  });
}