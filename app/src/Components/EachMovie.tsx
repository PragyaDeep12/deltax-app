import * as React from "react";
import { useState } from "react";
import { downloadFile } from "../Dao/FirebaseDao";

import { Link } from "react-router-dom";
import UploadingIcon from "../icons/spinner.svg";
export default function EachMovie(props) {
  const { movie } = props;
  const [poster, setPoster] = useState<string>("");
  const actors = props.movie.cast;
  React.useEffect(() => {
    console.log(movie.posterUrl);
    var response = movie.posterUrl
      ? downloadFile(movie.posterUrl).then(res => {
          if (res) setPoster(res);
        })
      : "";
  }, []);
  return (
    <div className="row each-movie-row">
      <img
        className={"col-md-3 movie "}
        src={poster === "" ? UploadingIcon : poster}
      />

      <div className="each-movie-col col-md-2">{movie.name}</div>
      <div className="each-movie-col col-md-1">
        {movie.yearOfRelease ? movie.yearOfRelease : 2019}
      </div>
      <div className="each-movie-col col-md-3 justify-text">{movie.plot}</div>
      <div className="each-movie-col col-md-2">
        {movie.cast
          ? movie.cast.map((item, index) => {
              return <div className="col">{item.name}</div>;
            })
          : ""}
      </div>
      <div className="each-movie-col col-md-1">
        <Link
          to={{
            pathname: "/movies/edit",
            state: {
              movie: movie
            }
          }}
        >
          <img className="edit-icon  absolute-center" />
        </Link>
      </div>
    </div>
  );
}
