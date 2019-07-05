import React, { useState, useEffect } from "react";

import AddCeleb from "./AddCeleb";
import ShowCelebs from "./ShowCelebs";
export default function Celebs(props) {
  return <div>{props.function === "show" ? <ShowCelebs /> : <AddCeleb />}</div>;
}
