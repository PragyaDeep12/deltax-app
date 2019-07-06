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
    <div className="mt-1 mb-1">
      <AddCeleb />
      <div className="text-right">
        <button
          className="btn btn-success ml-1 mr-3"
          onClick={() => {
            var elm = document.getElementById("addCeleb");
            if (elm) {
              elm.style.visibility = "visible";
            }
          }}
        >
          +Celebrity
        </button>
      </div>

      <span className="text-left">
        <h4 className="ml-2">Show Celebrities</h4>
        <hr />
      </span>

      <div className="row bg-light">
        <div className="col-md-2 ">
          <h5>NAME</h5>
        </div>
        <div className="col-md-2">
          <h5>DOB</h5>
        </div>
        <div className="col-md-2">
          <h5>GENDER</h5>
        </div>
        <div className="col-md-6">
          <h5>BIO</h5>
        </div>
      </div>
      {celebList.map((item, index) => {
        return <EachCeleb celeb={item} key={index} />;
      })}
    </div>
  );
}
