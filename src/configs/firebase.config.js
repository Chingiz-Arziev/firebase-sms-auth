// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAcpTy2AQf2o4yIzkpkX79L1xZiNIy1QmI",
  authDomain: "my-projects-aa58e.firebaseapp.com",
  projectId: "my-projects-aa58e",
  storageBucket: "my-projects-aa58e.appspot.com",
  messagingSenderId: "466671178136",
  appId: "1:466671178136:web:6a4d2f7dabafd974065bed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

