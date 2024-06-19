// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9E42ZtLE48ObvBn9ifyABrCDaM_D8f84",
  authDomain: "moviezz-c46f4.firebaseapp.com",
  projectId: "moviezz-c46f4",
  storageBucket: "moviezz-c46f4.appspot.com",
  messagingSenderId: "603602155685",
  appId: "1:603602155685:web:f6783ab7b176d7806c354c"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth()

  export default app