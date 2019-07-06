import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Styles/bootstrap.css";
import "./Styles/stylesheet.css";
import App from "./App";
import firebase from "firebase";
import * as serviceWorker from "./serviceWorker";
var firebaseConfig = {
  apiKey: "AIzaSyBGNUYLBU74zRA28rd9Qi-bM1IY20zNC4w",
  authDomain: "popcorn-cinemas.firebaseapp.com",
  databaseURL: "https://popcorn-cinemas.firebaseio.com",
  projectId: "popcorn-cinemas",
  storageBucket: "popcorn-cinemas.appspot.com",
  messagingSenderId: "907631886056",
  appId: "1:907631886056:web:31693c1e1b33fe0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
