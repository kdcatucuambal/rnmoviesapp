import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '04170bab7edb21d3a9f84cb3e9ec81f5',
    language: 'es-ES',
  },
});


