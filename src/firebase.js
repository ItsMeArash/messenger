import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA9Zk0lxWyiyw18Q3mZ2ECRR5IbxH5fq9g",
    authDomain: "imessenger-ff050.firebaseapp.com",
    projectId: "imessenger-ff050",
    storageBucket: "imessenger-ff050.appspot.com",
    messagingSenderId: "429829635469",
    appId: "1:429829635469:web:5e456ec2663756e63751c4"
  }).auth();
