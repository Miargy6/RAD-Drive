import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/database";


const app = firebase.initializeApp({
  apiKey: "AIzaSyBmJjExczVOuGiL7jZZBkvu56D1EpDji0k",
  authDomain: "raddrive-15c2b.firebaseapp.com",
  projectId: "raddrive-15c2b",
  storageBucket: "raddrive-15c2b.appspot.com",
  messagingSenderId: "35797809840",
  appId: "1:35797809840:web:68184496c6ba21eaff5975"
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