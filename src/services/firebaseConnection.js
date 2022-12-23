import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB56M9AqegTjOVX2xjPKlJ5bOQZu6TCIqU",
  authDomain: "projeto-mecanico.firebaseapp.com",
  projectId: "projeto-mecanico",
  storageBucket: "projeto-mecanico.appspot.com",
  messagingSenderId: "530885097723",
  appId: "1:530885097723:web:76fe48c21916b2fd63985e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);