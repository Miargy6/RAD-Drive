import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/database";


const app = firebase.initializeApp({
  apiKey: "AIzaSyD9O0cqSDwMm6bq8lq9jgPXX2xLp1iRs2g",
  authDomain: "rad-drive-9596f.firebaseapp.com",
  projectId: "rad-drive-9596f",
  storageBucket: "rad-drive-9596f.appspot.com",
  messagingSenderId: "501462829820",
  appId: "1:501462829820:web:11011cf7085adae33d6579"
  // measurementId: "G-BBLD1BNKHX"
  // databaseURL: "https://cornelderplatform-default-rtdb.firebaseio.com",
});



const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  tableData: firestore.collection("tableData"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = app.storage()
export const auth = app.auth()
export default app.database().ref()