import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import DatePicker from "./DatePicker";
import SingleSelect from "./SingleSelect";
import CelebsModel from "../Models/CelebsModel";
import { TextField } from "@material-ui/core";
import { addCeleb } from "../Dao/CelebDao";
import { Redirect } from "react-router-dom";
export default function AddCeleb() {
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
          var elm = document.getElementById("addCeleb");
          if (elm) {
            elm.style.visibility = "visible";
          }
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <div
      className="loading-background"
      style={{ visibility: "hidden" }}
      id="addCeleb"
    >
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
                  console.log(e.target.value);
                }}
              />
              {/* <input
                type="text"
                id="outlined-full-width"
                label="Name"
                placeholder="Enter Name"
                onChange={e => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              /> */}
              <div className="row">
                <SingleSelect
                  setGenderFunction={value => {
                    console.log(value);
                    setGender(value);
                  }}
                />
              </div>
              <br />
              <div>
                <DatePicker
                  fullWidth
                  setDateFunction={value => {
                    console.log(value);
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
                  console.log(e.target.value);
                }}
              />
              {/* <TextField
                id="outlined-full-width"
                label="Bio"
                style={{ margin: 0 }}
                placeholder="Enter Bio"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => {
                  setBio(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <br />
              <br /> */}
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={formSubmit}
              >
                Add Celebrity
              </button>
              <br />
              <button
                className="btn btn-light"
                onClick={() => {
                  var elm = document.getElementById("addCeleb");
                  if (elm) {
                    elm.style.visibility = "hidden";
                  }
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
