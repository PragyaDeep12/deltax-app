import MovieModel from "./Models/MovieModel";

export function isValidMovie(
  movie: MovieModel
): { isValid: boolean; message: String } {
  if (movie) {
    //movie isn't null
    if (movie.name) {
      //movie name is not null
      if (movie.plot) {
        //movie plot is not null
        if (movie.posterUrl) {
          //movie poster is not null
          if (movie.cast && movie.cast.length > 0) {
            //movie casts empty
            return handleMovieResponse(true, "Form Success");
          } else {
            return handleMovieResponse(false, "Movie Casts is empty");
          }
        } else {
          return handleMovieResponse(false, "Movie Poster is empty");
        }
      } else {
        return handleMovieResponse(false, "Movie Plot is empty");
      }
    } else {
      return handleMovieResponse(false, "Movie Name is empty");
    }
  } else {
    return handleMovieResponse(false, "Movie is Null");
  }
}
export function handleMovieResponse(
  isValid,
  message
): { isValid: boolean; message: String } {
  return { isValid: isValid, message: message };
}
