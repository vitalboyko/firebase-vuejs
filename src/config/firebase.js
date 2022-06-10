import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFnpWtih1DgDiNkvV2sJ2lQPX2Sk0FO-s",
    authDomain: "aebweb.firebaseapp.com",
    databaseURL: "https://aebweb-8c8c1.firebaseio.com/",
    projectId: "aebweb",
    storageBucket: "aebweb.appspot.com",
    messagingSenderId: "1051327661160",
    appId: "1:1051327661160:web:78046b8bad89e3c934a7dd",
    measurementId: "G-KMF86RM465",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;