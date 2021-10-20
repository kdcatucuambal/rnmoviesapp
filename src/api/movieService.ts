import {axiosClient} from './axiosClient';
import {
  Movie,
  MovieResponse,
  MovieFull,
  MovieCredits,
} from '../interfaces/MovieInterface';
export const movieService = {
  async getMoviesNowPlaying() {
    return (await axiosClient.get<MovieResponse>(MOVIES_NOW_PLAYING_ENDP)).data;
  },
  async getMoviesPopular() {
    return (await axiosClient.get<MovieResponse>(MOVIES_POPULAR_ENDP)).data;
  },
  async getMoviesTopRated() {
    return (await axiosClient.get<MovieResponse>(MOVIES_TOP_RATED_ENDP)).data;
  },
  async getMoviesUpcoming() {
    return (await axiosClient.get<MovieResponse>(MOVIES_UPCOMING_ENDP)).data;
  },
  async getMovieDetails(movieId: string) {
    return (await axiosClient.get<MovieFull>(`/${movieId}`)).data;
  },
  async getMovieCredtis(movieId: string) {
    return (
      await axiosClient.get<MovieCredits>(`${movieId}/${MOVIE_CREDITS_ENDP}`)
    ).data;
  },
};

export const URl_FOR_IMAGES = 'https://image.tmdb.org/t/p/w500';
export const MOVIES_NOW_PLAYING_ENDP = '/now_playing';
export const MOVIES_POPULAR_ENDP = '/popular';
export const MOVIES_TOP_RATED_ENDP = '/top_rated';
export const MOVIES_UPCOMING_ENDP = '/upcoming';
export const MOVIE_CREDITS_ENDP = '/credits';
