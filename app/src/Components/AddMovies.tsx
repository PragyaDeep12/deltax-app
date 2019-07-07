import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import CelebsModel from "../Models/CelebsModel";
import MovieModel from "../Models/MovieModel";
import PreviewImage from "../icons/picture.svg";
import UploadingIcon from "../icons/spinner.svg";
import { uploadFile, downloadFile } from "../Dao/FirebaseDao";
import { addMovie } from "../Dao/MovieDao";
import { Link } from "react-router-dom";
import AddCeleb from "./AddCeleb";

import { Redirect } from "react-router-dom";
import { openSnackbar } from "./CustomSnackbar";
export default function AddMovies(props) {
  const { movie } = props;
  const [name, setName] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState(0);
  const [plot, setPlot] = useState("");
  const [cast, setCast]: [Array<CelebsModel>, any] = useState([]);
  const [poster, setPoster] = useState<any>("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [uploadImage, setUploadImage] = useState();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  let isMounted = false;

  const setMovieModel = (movieModel: MovieModel) => {
    console.log(movieModel);
    if (
      movieModel &&
      movieModel.name &&
      movieModel.cast &&
      movieModel.plot &&
      movieModel.posterUrl &&
      movieModel.yearOfRelease
    ) {
      setName(movieModel.name);
      setCast(movieModel.cast);
      setYearOfRelease(movieModel.yearOfRelease);
      setPlot(movieModel.plot);
      setDownloadUrl(movieModel.posterUrl);
    }
  };
  // let isMounted =false;
  // if (!isMounted && movie) {
  //   isMounted = true;
  //   if (movie && movie.movie) {
  //     setMovieModel(movie.movie);
  //   }
  // }
  useEffect(() => {
    if (!isMounted && movie) {
      isMounted = true;
      if (movie && movie.movie) {
        setMovieModel(movie.movie);
        setIsUploading(true);
        downloadFile(movie.movie.posterUrl).then(res => {
          setIsUploading(false);
          setPoster(res);
        });
      }
    }
  }, []);
  const uImage = () => {
    setIsUploading(true);
    uploadFile(uploadImage, e => {
      setIsUploading(e);
    })
      .then(res => {
        //uploaded file comes in res
        if (res && res.file && res.downloadPath) {
          setDownloadUrl(res.downloadPath);
          setPoster(URL.createObjectURL(res.file));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const formSubmit = e => {
    var movieM: MovieModel = {
      name: name,
      plot: plot,
      cast: cast,
      posterUrl: downloadUrl,
      yearOfRelease: yearOfRelease
    };

    addMovie(movieM)
      .then(res => {
        if (res.isValid) {
          if (movie && movie.movie) {
            openSnackbar({
              timeout: 3000,
              message: "Movie Details Updated Successfully"
            });
          } else {
            openSnackbar({
              timeout: 3000,
              message: "Movie Added Successfully"
            });
          }
        }
        console.log(res);
      })
      .catch(err => {
        openSnackbar({
          timeout: 3000,
          message: "Sorry, " + err.message
        });
      });
    setRedirect(true);
  };

  return (
    <div>
      {redirect ? <Redirect to="/movies/show" /> : null}
      <h5>{movie ? "Edit Movie" : "Add Movie"}</h5>
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
                value={name}
                placeholder={"Movie Name"}
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
                value={yearOfRelease}
              />
            </div>
            <div className="input-group mb-3">
              <textarea
                name="Plot"
                value={plot}
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

            <div className="input-group mb-3 cast-selector">
              <MultiSelect
                cast={movie && movie.movie ? movie.movie.cast : ""}
                setCastFunction={value => {
                  setCast(value);
                }}
              />
            </div>

            <img
              src={isUploading ? UploadingIcon : poster ? poster : PreviewImage}
              className="preview-image"
              alt="Preview Image"
            />
            <br />
            <div className="row">
              <button
                type="submit"
                className="col btn btn-primary"
                onClick={formSubmit}
                disabled={isUploading}
              >
                {movie ? "Update Movie" : "Add Movie"}
              </button>
              <Link className="col" to="/movies/show">
                <button className="btn btn-light">Cancel</button>
              </Link>
            </div>
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
