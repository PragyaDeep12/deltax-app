import * as React from "react";
import { useState } from "react";
import { downloadFile } from "../Dao/FirebaseDao";
export default function EachMovie(props) {
  const { movie } = props;
  const [poster, setPoster] = useState("");
  const actors = props.movie.cast;
  React.useEffect(() => {
    console.log(movie.posterUrl);
    var response = movie.posterUrl
      ? downloadFile(movie.posterUrl, setPoster)
      : "";
  }, []);
  return (
    <div className="row each-movie-row">
      <img className={"col-md-3 movie "} src={poster} />

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
