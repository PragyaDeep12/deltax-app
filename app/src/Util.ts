import MovieModel from "./Models/MovieModel";

export function isValidMovie(movie: MovieModel) {
  if (movie) {
    //movie isn't null
    if (movie.name) {
      //movie name is not null
      if (movie.plot) {
        //movie plot is not null
        if (movie.poster) {
          //movie poster is not null
          if (movie.cast && movie.cast.length > 0) {
            //movie casts empty
            handleMovieResponse(true, "Form Success");
          } else {
            handleMovieResponse(false, "Movie Casts is empty");
          }
        } else {
          handleMovieResponse(false, "Movie Poster is empty");
        }
      } else {
        handleMovieResponse(false, "Movie Plot is empty");
      }
    } else {
      handleMovieResponse(false, "Movie Name is empty");
    }
  } else {
    handleMovieResponse(false, "Movie is Null");
  }
}
export function handleMovieResponse(isValid, message) {
  return { isValid: isValid, message: message };
}
