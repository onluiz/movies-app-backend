import axios from 'axios';
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  try {
    const { page } = event.queryStringParameters;
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.tmdbSecretKey}&language=en-US&page=${page || 1}`);
    return success(movies.data);
  } catch (e) {
    return failure({ status: false, error: e, });
  }
}
