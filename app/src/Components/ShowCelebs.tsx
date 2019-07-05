import React, { useState, useEffect } from "react";
import CelebsModel from "../Models/CelebsModel";
import { Link } from "react-router-dom";
import EachCeleb from "./EachCeleb";
export default function ShowCelebs() {
  const [celebList, setCelebList]: [Array<CelebsModel>, any] = useState([
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    },
    {
      name: "Shah Rukh Khan",
      gender: "Male",
      dob: new Date(),
      bio:
        "well known as the badshah of bollywood shah rukh khan is a very influential and famous celebrity"
    }
  ]);
  return (
    <div>
      show Celebs
      <Link to="/celebs/add" className="btn btn-success">
        +Celeb
      </Link>
      {celebList.map((item, index) => {
        return <EachCeleb celeb={item} />;
      })}
    </div>
  );
}
