import axios from 'axios';

const tmdbApiInstance = axios.create({ baseURL: process.env.tmdbApiUrl });
const params = `api_key=${process.env.tmdbApiKey}&language=en-US`;

const tmdbApi = {
  getUpcomingMovies(page = 1) {
    return tmdbApiInstance.get(`/movie/upcoming?${params}&page=${page}`);
  },
  getById(id) {
    return tmdbApiInstance.get(`/movie/${id}?${params}`);
  },
  searchMovie(query = '', page = 1) {
    return tmdbApiInstance.get(`/search/movie?${params}&query=${query}&page=${page}&include_adult=false`);
  },
};

export default tmdbApi;