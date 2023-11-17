// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMApo0LwYYcAXYHoXYoNqhcyeItDJ5np0",
  authDomain: "travel-site-fe21a.firebaseapp.com",
  projectId: "travel-site-fe21a",
  storageBucket: "travel-site-fe21a.appspot.com",
  messagingSenderId: "605902508215",
  appId: "1:605902508215:web:cbf2e888566667de9bfd32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app