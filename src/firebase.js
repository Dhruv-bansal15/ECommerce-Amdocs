import {getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBm70qM1QBqRH1MZoNPqHEDS1DD8hEqnMQ",
  authDomain: "clone-3a50e.firebaseapp.com",
  projectId: "clone-3a50e",
  storageBucket: "clone-3a50e.appspot.com",
  messagingSenderId: "658683639298",
  appId: "1:658683639298:web:d420076ce44ba486e7d91b",
  measurementId: "G-8P0EDR6951",
});

const auth = getAuth();

export { auth };
