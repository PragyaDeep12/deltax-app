import * as React from "react";
import { format } from "date-fns";
export default function EachCeleb(props) {
  const { celeb } = props;
  return (
    <div className="row each-movie-row">
      <div className="col-md-2 each-movie-col">{celeb.name}</div>
      <div className="col-md-2 each-movie-col">
        {format(new Date(celeb.dob), "dd/MM/yyyy")}
      </div>
      <div className="col-md-2 each-movie-col">{celeb.gender}</div>
      <div className="col-md-6  each-movie-col">{celeb.bio}</div>
    </div>
  );
}
