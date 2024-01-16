import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW5Lp5uFDa9HAWx_SdRTnekWMn50oLI1E",
  authDomain: "olxclone-1ce21.firebaseapp.com",
  projectId: "olxclone-1ce21",
  storageBucket: "olxclone-1ce21.appspot.com",
  messagingSenderId: "448045962471",
  appId: "1:448045962471:web:677853dd2410d5b5ca7e42",
  measurementId: "G-HLNXD6GH7P"
};

const Firebase=firebase.initializeApp(firebaseConfig)
export default Firebase