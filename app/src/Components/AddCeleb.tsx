import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import DatePicker from "./DatePicker";
import SingleSelect from "./SingleSelect";
import CelebsModel from "../Models/CelebsModel";
import { TextField } from "@material-ui/core";
import { addCeleb } from "../Dao/CelebDao";
import { Redirect } from "react-router-dom";
import { closeDialog } from "./CustomBootDialog";
export default function AddCeleb(props) {
  // const { movie } = props.movie;
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("");
  const formSubmit = e => {
    e.preventDefault();
    var celeb: CelebsModel = {
      name: name,
      bio: bio,
      dob: dob,
      gender: gender
    };
    addCeleb(celeb)
      .then(res => {
        console.log(res);
        if (res.isValid) {
          closeDialog();
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="popup bg-light">
      <h5> Add Celebrity</h5>
      <div>
        <div>
          {/* <h2 className="">Register</h2> */}
          <form
            onSubmit={e => {
              formSubmit(e);
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={e => {
                setName(e.target.value);
              }}
            />

            <div className="row">
              <SingleSelect
                setGenderFunction={value => {
                  setGender(value);
                }}
              />
            </div>
            <br />
            <div>
              <DatePicker
                fullWidth
                setDateFunction={value => {
                  setDob(value);
                }}
              />
            </div>
            <br />
            <textarea
              className="form-control"
              placeholder="Enter Bio"
              onChange={e => {
                setBio(e.target.value);
              }}
            />

            <button
              className="btn btn-light"
              onClick={() => {
                closeDialog();
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={formSubmit}
            >
              Add Celebrity
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
