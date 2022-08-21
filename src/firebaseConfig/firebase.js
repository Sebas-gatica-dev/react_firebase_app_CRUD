// import { initializeApp } from "firebase/app";

// import { getFirestore } from '@firebase/firestore'

// const firebaseConfig = {
//   apiKey: "Aquí vienen tus datos",
//   authDomain: "Aquí vienen tus datos",
//   projectId: "Aquí vienen tus datos",
//   storageBucket: "Aquí vienen tus datos",
//   messagingSenderId: "Aquí vienen tus datos",
//   appId: "Aquí vienen tus datos"
// };

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Importat getfirestore y pasale como parametro, una constante que sea la funcion initializeApp con firebaseConfig como parametro
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwyzSiuhCTgNor9_j8ZlKr0RzC2bLVocA",
  authDomain: "crud-firebase-react-b15d6.firebaseapp.com",
  projectId: "crud-firebase-react-b15d6",
  storageBucket: "crud-firebase-react-b15d6.appspot.com",
  messagingSenderId: "528808860444",
  appId: "1:528808860444:web:0d5e7ac9bcf1b7a62bb8d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);