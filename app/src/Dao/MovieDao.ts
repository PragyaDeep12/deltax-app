import { getCloudFirestore } from "./FirebaseDao";
import MovieModel from "../Models/MovieModel";

//Add Movie to Backend
export function addMovie(movie: MovieModel) {
  var Promise = new Promise((resolve, reject) => {
    if (movie && movie.name) {
      getCloudFirestore()
        .collection("movies")
        .doc(movie.name)
        .set(movie)
        .then(res => {
          resolve(true);
          console.log("form submitted");
        })
        .catch(err => {
          reject(false);
          console.log("error", err);
        });
    }
  });
  return Promise;
}
