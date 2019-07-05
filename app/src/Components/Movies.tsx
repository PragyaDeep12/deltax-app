import React, { useState, useEffect } from "react";
import ShowMovies from "./ShowMovies";
import AddMovies from "./AddMovies";
export default function Movies(props) {
  return (
    <div>{props.function === "show" ? <ShowMovies /> : <AddMovies />}</div>
  );
}
