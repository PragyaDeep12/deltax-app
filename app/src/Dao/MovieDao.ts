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
export const getMovies = async setMovieList => {
  var list: Array<MovieModel> = [];
  var promise = new Promise((resolve, reject) => {
    getCloudFirestore()
      .collection("movies")
      .onSnapshot(async snapshot => {
        await snapshot.docChanges().map((change, index) => {
          if (change.type === "added") {
            // console.log("New city: ", change.doc.data());
            var data = change.doc.data();
            var movie: MovieModel = {
              name: data.name,
              cast: data.cast,
              plot: data.plot
            };
            if (movie) list.push(movie);
          }
          if (change.type === "modified") {
            //   console.log("Modified city: ", change.doc.data());
          }
          if (change.type === "removed") {
            //   console.log("Removed city: ", change.doc.data());
          }
        });
        console.log(list);
        setMovieList(list);

        // console.log(movieList);
      });
  });
};
