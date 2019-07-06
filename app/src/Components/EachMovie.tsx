import * as React from "react";
import { Component } from "react";
export default function EachMovie(props) {
  const { movie } = props;
  const actors = props.movie.cast;
  return (
    <div className="row each-movie-row">
      <img className={"col-md-3 movie " + movie.image} />

      <div className="each-movie-col col-md-1">{movie.name}</div>
      <div className="each-movie-col col-md-1">
        {movie.yearOfRelease ? movie.yearOfRelease : 2019}
      </div>
      <div className="each-movie-col col-md-5 justify-text">{movie.plot}</div>
      <div className="each-movie-col col-md-2">
        {movie.cast
          ? movie.cast.map((item, index) => {
              return <div className="col">{item.name}</div>;
            })
          : ""}
      </div>
    </div>
  );
}
