import axios from 'axios';
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  try {
    const { query, page } = event.queryStringParameters;
    const movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.tmdbSecretKey}&language=en-US&query=${query}&page=${page}&include_adult=false`);
    return success(movies.data);
  } catch (e) {
    return failure({ status: false, error: e, });
  }
}
