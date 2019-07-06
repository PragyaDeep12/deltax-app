import React, { useState, useEffect } from "react";
import CelebsModel from "../Models/CelebsModel";
import { Link } from "react-router-dom";
import EachCeleb from "./EachCeleb";
import { getCelebs } from "../Dao/CelebDao";
import AddCeleb from "./AddCeleb";
export default function ShowCelebs() {
  const [celebList, setCelebList]: [Array<CelebsModel>, any] = useState([
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // },
    // {
    //   name: "Shah Rukh Khan",
    //   gender: "Male",
    //   dob: new Date(),
    //   bio:
    //     "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    // }
  ]);
  useEffect(() => {
    getCelebs(setCelebList);
  }, []);

  return (
    <div>
      <AddCeleb />
      show Celebs
      <button
        className="btn btn-success"
        onClick={() => {
          var elm = document.getElementById("addCeleb");
          if (elm) {
            elm.style.visibility = "visible";
          }
        }}
      >
        +Celeb
      </button>
      {celebList.map((item, index) => {
        return <EachCeleb celeb={item} />;
      })}
    </div>
  );
}
