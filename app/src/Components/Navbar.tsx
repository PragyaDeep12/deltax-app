import * as React from "react";
import { Component, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import SearchComponent from "./SearchComponent";
import MenuNavigation from "./MenuNavigation";
// import CitySelector from "./CitySelector";
import appIcon from "../icons/popcorn.svg";
import firebase from "firebase";
import LoginContext from "../Contexts/LoginContext";
export default function Navbar() {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  return (
    <nav className="row bg-dark">
      {/* <div className="popup" hidden={true} id="popup">
        <CitySelector parent={"Navbar"} />
      </div> */}
      <div className="col-md-2 navbar">
        <label className="header-text navbar">
          <img src={appIcon} alt="" className="small-app-icon" />
          <span>POPCORN</span>
        </label>
      </div>
      <div className="col-md-7">
        {/* <SearchComponent placeholder="Search" /> */}

        <MenuNavigation />
      </div>
      <div className="col-md-3 navbar">
        {console.log(loginInfo)}
        {loginInfo.isLoggedIn === true ? (
          <span className="text-right">
            <img className="online-user user-icon" />
            <button
              className="btn btn-light"
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              Logout
            </button>
          </span>
        ) : (
          <div className="text-right" style={{ width: "100%" }}>
            <Link to="/signup" className="btn btn-primary">
              Sign In
            </Link>
          </div>
        )}
        {/* <img className="menu-icon" /> */}
      </div>
    </nav>
  );
}
