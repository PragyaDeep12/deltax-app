import React, { useState, useEffect } from "react";
import ShowMovies from "./ShowMovies";
import AddMovies from "./AddMovies";
export default function Movies(props) {
  const { movie } = props;
  console.log(movie);
  return (
    <div>
      {props.function === "show" ? <ShowMovies /> : <AddMovies movie={movie} />}
    </div>
  );
}
