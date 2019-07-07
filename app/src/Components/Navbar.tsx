import * as React from "react";

import MenuNavigation from "./MenuNavigation";
import appIcon from "../icons/popcorn.svg";
export default function Navbar() {
  return (
    <nav className="row bg-dark">
      <div className="col-md-3 navbar">
        <label className="header-text navbar">
          <img src={appIcon} alt="" className="small-app-icon" />
          <span>POPCORN</span>
        </label>
      </div>
      <div className="col-md-6">
        <MenuNavigation />
      </div>
    </nav>
  );
}
