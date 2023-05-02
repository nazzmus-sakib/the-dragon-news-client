// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_APIKEY);
const firebaseConfig = {
  apiKey: "AIzaSyAR8PxsiUX7Ye1hzTrWk7cnNZC8pvCvi4I",
  authDomain: "dragon-news-1b139.firebaseapp.com",
  projectId: "dragon-news-1b139",
  storageBucket: "dragon-news-1b139.appspot.com",
  messagingSenderId: "207655777563",
  appId: "1:207655777563:web:ad7afc0bf9d84fec340fbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
