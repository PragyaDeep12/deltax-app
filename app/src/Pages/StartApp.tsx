import * as React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
export default function StartApp() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setTimeout(function() {
      setRedirect(true);
    }, 3000);
  }, []);
  return (
    <div className="back-cover">
      <img className="col eat-popcorn" />

      <div>
        {" "}
        <h2>POPCORN & More</h2>
      </div>
      {redirect && <Redirect to="/movies/show" />}
    </div>
  );
}
