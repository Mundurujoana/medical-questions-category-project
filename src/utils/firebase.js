import { collection, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyCUiKd-Szjgm0h9sBV7pALN2mRKDhUIoqE",
    authDomain: "restaurant-5c835.firebaseapp.com",
    projectId: "restaurant-5c835",
    storageBucket: "restaurant-5c835.appspot.com",
    messagingSenderId: "1040452622845",
    appId: "1:1040452622845:web:9ee5ff7a45c19a9adb2194",
    measurementId: "G-YPGNSYWRH4"
};



// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics();


const db = getFirestore();
const getAllMenuItems = () => {
    const colRef = collection(db, "MenuItems")

    getDoc(colRef)
        .then((snapshut) => {
            console.log(snapshut.docs);
        })
}
export default { getAllMenuItems }