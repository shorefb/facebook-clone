import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjxWbLUpBsd70MtNNTRr5Ris68MBmA1QY",
    authDomain: "fb-clone-c5adb.firebaseapp.com",
    projectId: "fb-clone-c5adb",
    storageBucket: "fb-clone-c5adb.appspot.com",
    messagingSenderId: "966198347462",
    appId: "1:966198347462:web:16a0dddb99ccbe758379c7",
    measurementId: "G-TCDQE4D68E"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  export {auth, provider, app};
  export default db;