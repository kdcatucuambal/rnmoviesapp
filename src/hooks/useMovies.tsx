import {useEffect, useState} from 'react';
import {Movie} from '../interfaces/MovieInterface';
import {movieService} from '../api/movieService';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieService.getMoviesNowPlaying();
    const popularPromise = movieService.getMoviesPopular();
    const topRatedPromise = movieService.getMoviesTopRated();
    const upcomingPromise = movieService.getMoviesUpcoming();

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    setMoviesState({
      nowPlaying: resps[0].results,
      popular: resps[1].results,
      topRated: resps[2].results,
      upcoming: resps[3].results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
    console.log('useMovies');
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};

export default useMovies;
