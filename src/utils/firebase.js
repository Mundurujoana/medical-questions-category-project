// import { collection, getDoc, getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const firebaseConfig = {
//     apiKey: "AIzaSyCUiKd-Szjgm0h9sBV7pALN2mRKDhUIoqE",
//     authDomain: "restaurant-5c835.firebaseapp.com",
//     projectId: "restaurant-5c835",
//     storageBucket: "restaurant-5c835.appspot.com",
//     messagingSenderId: "1040452622845",
//     appId: "1:1040452622845:web:9ee5ff7a45c19a9adb2194",
//     measurementId: "G-YPGNSYWRH4"
// };



// // Initialize Firebase
// initializeApp(firebaseConfig);
// const analytics = getAnalytics();


// export const db = getFirestore();


import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import {
  getStorage,
} from 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUiKd-Szjgm0h9sBV7pALN2mRKDhUIoqE",
    authDomain: "restaurant-5c835.firebaseapp.com",
    projectId: "restaurant-5c835",
    storageBucket: "restaurant-5c835.appspot.com",
    messagingSenderId: "1040452622845",
    appId: "1:1040452622845:web:9ee5ff7a45c19a9adb2194",
    measurementId: "G-YPGNSYWRH4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.log(err);
//   }
// };
// const registerWithEmailAndPassword = async (name, email, password, downloadURL,
//   continent, country, city, postCode) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const { user } = res;
//     await setDoc(doc(db, 'users', user.uid), {
//       uid: user.uid,
//       name,
//       authProvider: 'local',
//       email,
//       profileURL: downloadURL,
//       continent,
//       country,
//       city,
//       postCode,
//     });
//   } catch (err) {
//     toast.error(err, {
//       position: 'top-right',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: 'light',
//     });
//   }
// };
// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     toast.success('Password reset link sent!', {
//       position: 'top-right',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: 'light',
//     });
//   } catch (err) {
//     toast.error(err, {
//       position: 'top-right',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: 'light',
//     });
//   }
// };

// const logout = () => {
//   signOut(auth);
// };

export {
  auth,
  db,
  storage,
};
