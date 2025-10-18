// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjy45lGAJ7GpzexHiaFj6enBOnILUqacw",
  authDomain: "sevacare-e4e0b.firebaseapp.com",
  projectId: "sevacare-e4e0b",
  storageBucket: "sevacare-e4e0b.firebasestorage.app",
  messagingSenderId: "274285039747",
  appId: "1:274285039747:web:c84ce3cae34243ed5f0bb6",
  measurementId: "G-FS93YJHJJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);