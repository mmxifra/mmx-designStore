// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACd19uBB04qx9VBI6Zuuch_ADymAytYhs',
  authDomain: 'chreactmmxdstore.firebaseapp.com',
  projectId: 'chreactmmxdstore',
  storageBucket: 'chreactmmxdstore.appspot.com',
  messagingSenderId: '373222335636',
  appId: '1:373222335636:web:1112ecb79457024aa00081'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;