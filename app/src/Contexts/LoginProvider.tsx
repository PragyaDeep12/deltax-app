import React, { useState } from "react";
import LoginInfo from "../Models/LoginInfo";
import LoginContext from "./LoginContext";
import firebase from "firebase";

export default function LoginProvider(props) {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    isLoggedIn: null,
    user: null,
    city: null
  });
  const setLoginDetails = (loginInfo: LoginInfo) => {
    setLoginInfo(loginInfo);
  };
  const login = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async user => {
        console.log("loggedin");
        setLoginInfo({
          ...loginInfo,
          isLoggedIn: true,
          user: { email: email }
        });
      })
      .catch(err => {
        console.log(err.message);
        // openSnackbar({ message: err.message, timeout: 3000 });
      });
  };
  const signUp = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  const setCity = async city => {
    setLoginInfo({ ...loginInfo, city: city });
  };
  return (
    <LoginContext.Provider
      value={{
        state: { loginInfo },
        actions: {
          login,
          signUp,
          setCity,
          setLoginDetails
        }
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
