import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import CitySelector from "./CitySelector";
import LoginContext from "../Contexts/LoginContext";
export default function MenuNavigation(props) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  const [hidden, setHidden] = useState(true);
  return (
    <nav
      className=" navbar navbar-expand-lg navbar-dark bg-dark justify-content-between"
      style={{
        width: "100%",
        zIndex: 7,

        opacity: 1
      }}
    >
      <div className="" id="navbarSupportedContent">
        <ul className=" navbar-nav mr-auto ">
          <li className="nav-item">
            <Link className="nav-link" to={"/movies/show"}>
              Movies
            </Link>
          </li>
          {/* <li className="nav-item ">
            <Link className="nav-link" to="/">
              Events
            </Link>
          </li> */}

          {/* <li className="nav-item ">
            <Link className="nav-link" to={"/tvshows/show"}>
              Plays
            </Link>
          </li> */}
          <li className="nav-item ">
            <Link className="nav-link" to={"/celebs/show"}>
              Celebrities
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">
              Sports
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Monuments
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">
              Activities
            </Link>
          </li> */}
        </ul>

        {/* <form className="form-inline my-2 my-lg-0">
            <button
              type="button"
              className="navbar-logout"
              onClick={async () => {
                //to logout the user just remove it from the store
                // store.dispatch(updateUser(null));
                logout();

                // //console.log("here");
                // socket.disconnect();
                // localStorage.removeItem("user");
                // window.location.href = "/login";
                // socket.disconnect();
                // // await firebase.auth().signOut();
                // openSnackbar({ message: "Demo Message", timeout: 3000 });
              }}
            >
              logout
            </button>
          </form> */}
      </div>
      {/* <div className="" id="navbarSupportedContent">
        <ul className=" navbar-nav mr-auto ">
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                var elm = document.getElementById("popup");
                if (elm) {
                  elm.hidden = false;
                }
              }}
            >
              {loginInfo.city.toUpperCase()}
              {/* replce this with context.location */}
      {/* </a>
          </li> */}
      {/* <li className="nav-item ">
            <Link className="nav-link" to="/">
              Language */}
      {/* replace this with selected language */}
      {/* </Link>
          </li> */}
      {/* </ul>
      </div> */}
    </nav>
  );
}
