import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import CelebsModel from "../Models/CelebsModel";
import MovieModel from "../Models/MovieModel";
export default function AddMovies() {
  const [name, setName] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState(0);
  const [plot, setPlot] = useState("");
  const [cast, setCast]: [Array<CelebsModel>, any] = useState([]);
  const [poster, setPoster] = useState("");

  const formSubmit = e => {
    var movie: MovieModel = {
      name: name,
      plot: plot,
      cast: cast,
      poster: poster
    };
  };
  return (
    <div>
      add movies
      <div>
        <div className="basic-form">
          {/* <h2 className="">Register</h2> */}
          <form
            onSubmit={e => {
              formSubmit(e);
            }}
          >
            <div className="input-group mb-3">
              <input
                type="text"
                name="name"
                onChange={e => {
                  setName(e.target.value);
                  //setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="Movie Name"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="number"
                name="yearOfRelease"
                onChange={e => {
                  setYearOfRelease(Number(e.target.value));
                  //   setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Year of Release"
              />
            </div>
            <div className="input-group mb-3">
              <textarea
                name="Plot"
                onChange={e => {
                  setPlot(e.target.value);
                  //   setRPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Plot "
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="file"
                name="poster"
                onChange={e => {
                  setPoster(e.target.value);
                  //   setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Poster"
              />
            </div>
            <div className="input-group mb-3">
              <MultiSelect
                setCastFunction={value => {
                  setCast(value);
                }}
              />
              {console.log(cast)}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={formSubmit}
            >
              Add
            </button>
          </form>
        </div>
        {/* <Link to="/login" className="hyperlink">
            Login
          </Link>
       
        {loginInfo.isLoggedIn && <Redirect to={"/movies/show"} />} */}
      </div>
    </div>
  );
}
