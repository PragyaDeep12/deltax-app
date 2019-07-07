import React, { useState, useEffect } from "react";
import CelebsModel from "../Models/CelebsModel";
import EachCeleb from "./EachCeleb";
import AddCeleb from "./AddCeleb";
import { openModal } from "./CustomBootDialog";
import { getCloudFirestore } from "../Dao/FirebaseDao";
export default function ShowCelebs() {
  const [celebList, setCelebList]: [Array<CelebsModel>, any] = useState([]);
  useEffect(() => {
    getCloudFirestore()
      .collection("celebs")
      .onSnapshot(
        snapshot => {
          var list: Array<CelebsModel> = [];

          snapshot.docs.forEach(QueryDocumentSnapShot => {
            var data = QueryDocumentSnapShot.data();
            var celeb: CelebsModel = {
              name: data.name,
              bio: data.bio,
              dob: data.dob,
              gender: data.gender
            };
            list.push(celeb);
          });
          setCelebList(list);
        },
        err => {
          console.log(err);
        }
      );
  }, []);

  return (
    <div className="mt-1 mb-1">
      <div className="text-right">
        <button
          className="btn btn-success ml-1 mr-3"
          onClick={() => {
            openModal(<AddCeleb />);
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
