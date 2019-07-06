import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import CelebsModel from "../Models/CelebsModel";
import MovieModel from "../Models/MovieModel";
import PreviewImage from "../icons/picture.svg";
import UploadingIcon from "../icons/spinner.svg";
import { uploadFile } from "../Dao/FirebaseDao";
import { addMovie } from "../Dao/MovieDao";
export default function AddMovies() {
  const [name, setName] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState(0);
  const [plot, setPlot] = useState("");
  const [cast, setCast]: [Array<CelebsModel>, any] = useState([]);
  const [poster, setPoster] = useState<any>("");
  const [uploadImage, setUploadImage] = useState();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  useEffect(() => {
    console.log(poster);
  }, [poster]);
  const uImage = () => {
    setIsUploading(true);
    uploadFile(uploadImage, e => {
      setIsUploading(e);
    })
      .then(res => {
        //uploaded file comes in res
        setPoster(URL.createObjectURL(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
  const formSubmit = e => {
    var movie: MovieModel = {
      name: name,
      plot: plot,
      cast: cast,
      poster: poster
    };

    addMovie(movie);
  };
  return (
    <div>
      <h5>Add Movies</h5>
      <div>
        <div className="basic-form">
          <form
            onSubmit={e => {
              e.preventDefault();
              formSubmit(e);
            }}
          >
            <div className="input-group mb-3">
              <input
                type="text"
                name="name"
                onChange={e => {
                  setName(e.target.value);
                  //setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="Movie Name"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="number"
                name="yearOfRelease"
                onChange={e => {
                  setYearOfRelease(Number(e.target.value));
                  //   setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Year of Release"
              />
            </div>
            <div className="input-group mb-3">
              <textarea
                name="Plot"
                onChange={e => {
                  setPlot(e.target.value);
                  //   setRPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Plot "
              />
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  onChange={e => {
                    var file = e.target.files;
                    if (file) {
                      setUploadImage(file[0]);
                    }
                  }}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {uploadImage ? uploadImage.name : "Choose file"}
                </label>
              </div>
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  id="inputGroupFileAddon02"
                  onClick={uImage}
                >
                  Upload
                </span>
              </div>
            </div>

            <div className="input-group mb-3">
              <MultiSelect
                setCastFunction={value => {
                  setCast(value);
                }}
              />
              {console.log(cast)}
            </div>
            <img
              src={isUploading ? UploadingIcon : poster ? poster : PreviewImage}
              className="preview-image"
              alt="Preview Image"
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={formSubmit}
              disabled={isUploading}
            >
              Add Movie
            </button>
          </form>
        </div>
        {/* <Link to="/login" className="hyperlink">
            Login
          </Link>
       
        {loginInfo.isLoggedIn && <Redirect to={"/movies/show"} />} */}
      </div>
    </div>
  );
}
