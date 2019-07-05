import React from "react";
import LoginInfo from "../Models/LoginInfo";
export default React.createContext({
  state: {
    loginInfo: {
      user: null,
      isLoggedIn: null,
      city: null
    } as LoginInfo
  },
  actions: {}
});
