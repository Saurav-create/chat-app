import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBbUdz4UJhoBqV4OI7ZWihFJGwnZ_QwuMg",
    authDomain: "ts-chat-dc95d.firebaseapp.com",
    projectId: "ts-chat-dc95d",
    storageBucket: "ts-chat-dc95d.appspot.com",
    messagingSenderId: "759355072529",
    appId: "1:759355072529:web:2879345d877f92165411b0"
}).auth();