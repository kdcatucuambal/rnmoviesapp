import React, {useState, useEffect} from 'react';
import {movieService} from '../api/movieService';
import {MovieCredits, Cast, MovieFull} from '../interfaces/MovieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

const useMovieDetails = (movideId: number) => {
  const [state, setState] = useState<MovieDetails>({
      cast: [],
      isLoading: true,
      movieFull: undefined
  });
  const getMoviesDetails = async () => {
    const movieDetailsPromise = movieService.getMovieDetails(
      movideId.toString(),
    );
    const castPromise = movieService.getMovieCredtis(movideId.toString());
    const [movieDetails, movieCredits] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      cast: movieCredits.cast,
      isLoading: false,
      movieFull: movieDetails,
    });
  };

  useEffect(() => {
    getMoviesDetails();
  }, []);

  return {
    ...state,
  };
};

export default useMovieDetails;
