import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EachMovie from "./EachMovie";
import { getMovies } from "../Dao/MovieDao";
export default function ShowMovies() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    console.log("here");
    getMovies(setMovieList);
  }, []);
  return (
    <div className="text-right mt-1 mb-1">
      <Link to="/movies/add" className="btn btn-success ml-1 mr-3">
        + Movie
      </Link>

      <span className="text-left">
        <h4 className="ml-2">Show Movies</h4>
        <hr />
      </span>
      <div className="row text-center bg-light">
        <div className="col-md-3">
          <h5>PICTURE</h5>
        </div>
        <div className="col-md-2">
          <h5>NAME</h5>
        </div>
        <div className="col-md-1">
          <h5>YOR</h5>
        </div>

        <div className="col-md-3">
          <h5>PLOT</h5>
        </div>
        <div className="col-md-2">
          <h5>CAST</h5>
        </div>
        <div className="col-md-1" />
      </div>
      {movieList.map((item, index) => {
        return <EachMovie movie={item} key={index} />;
      })}
    </div>
  );
}
