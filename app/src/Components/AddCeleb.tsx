import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import DatePicker from "./DatePicker";
import SingleSelect from "./SingleSelect";
import { TextField } from "@material-ui/core";
export default function AddCeleb() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("");

  const formSubmit = e => {};
  return (
    <div>
      add Celebrities
      <div>
        <div className="basic-form">
          {/* <h2 className="">Register</h2> */}
          <form
            onSubmit={e => {
              formSubmit(e);
            }}
          >
            <TextField
              id="outlined-full-width"
              label="Name"
              style={{ margin: 0 }}
              placeholder="Enter Name"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              onChange={e => {
                setName(e.target.value);
                console.log(e.target.value);
              }}
            />
            <br />
            <div className="row">
              <div className="">
                <SingleSelect
                  setGenderFunction={value => {
                    console.log(value);
                    setGender(value);
                  }}
                />
              </div>
            </div>
            <div>
              <DatePicker
                setDateFunction={value => {
                  console.log(value);
                  setDob(value);
                }}
              />
            </div>
            <br />
            <TextField
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
            <br />

            <button
              type="submit"
              className="btn btn-primary"
              onClick={formSubmit}
            >
              Add Celeb
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
