import React from "react";
import { Link } from "react-router-dom";

export default function MenuNavigation(props) {
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

          <li className="nav-item ">
            <Link className="nav-link" to={"/celebs/show"}>
              Celebrities
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
