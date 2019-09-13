import axios from 'axios';
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  try {
    const { id } = event.pathParameters;
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.tmdbSecretKey}&language=en-US`);
    return success(movies.data);
  } catch (e) {
    return failure({ status: false, error: e, });
  }
}
