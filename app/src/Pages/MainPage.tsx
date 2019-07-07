import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Movies from "../Components/Movies";
import Celebs from "../Components/Celebs";
import StartApp from "./StartApp";
// import MainComponent from "../Components/MainComponent";
function MainPage(props) {
  let component;
  // const { match } = props.match;

  return (
    <div>
      {/* this is the main page */}
      <Navbar />
      <div>
        {props.match.params.type === "movies" ? (
          <Movies
            function={props.match.params.function}
            movie={props.location.state}
          />
        ) : props.match.params.type === "celebs" ? (
          <Celebs function={props.match.params.function} />
        ) : (
          <StartApp />
        )}
      </div>
    </div>
  );
}
export default MainPage;
