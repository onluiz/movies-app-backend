import axios from 'axios';
import { genres } from '../static/genres.json';

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
  // time complexity 0(n2). Not performatic
  applyGenres(results = []) {
    results.forEach(this.applyGenre);
  },
  applyGenre(movie) {
    movie.genres = movie.genre_ids.map(genre_id => {
      return genres.find(genre => genre.id === genre_id);
    });
  }
};

export default tmdbApi;