import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCcdRj2OwGNptXlxxhSQtG_jBCm8kf4M6Q",
	authDomain: "fir-63aac.firebaseapp.com",
	projectId: "fir-63aac",
	storageBucket: "fir-63aac.appspot.com",
	messagingSenderId: "299253777381",
	appId: "1:299253777381:web:e2a0991a6f32c9376ee50c",
	measurementId: "G-44FGEV7474",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db, auth };
