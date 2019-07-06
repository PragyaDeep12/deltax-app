import { getCloudFirestore } from "./FirebaseDao";
import MovieModel from "../Models/MovieModel";
import { isValidMovie } from "../Util";

//Add Movie to Backend
export function addMovie(movie: MovieModel): Promise<any> {
  var promise = new Promise((resolve, reject) => {
    var validity = isValidMovie(movie);
    if (validity.isValid) {
      if (movie && movie.name) {
        getCloudFirestore()
          .collection("movies")
          .doc(movie.name)
          .set(movie)
          .then(res => {
            resolve(validity);
            console.log("form submitted");
          })
          .catch(err => {
            reject(err);
            console.log("error", err);
          });
      } else {
        reject(validity);
      }
    } else {
      reject(validity);
    }
  });

  return promise;
}
