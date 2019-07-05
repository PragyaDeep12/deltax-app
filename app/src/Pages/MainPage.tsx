import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import AllPlays from "./AllPlays";
import Movies from "../Components/Movies";
import Celebs from "../Components/Celebs";
// import MainComponent from "../Components/MainComponent";
function MainPage({ match }) {
  let component;

  return (
    <div>
      {/* this is the main page */}
      <Navbar />
      <div>
        {match.params.type === "movies" ? (
          <Movies function={match.params.function} />
        ) : match.params.type === "celebs" ? (
          <Celebs function={match.params.function} />
        ) : (
          <AllPlays />
        )}
      </div>
    </div>
  );
}
export default MainPage;
