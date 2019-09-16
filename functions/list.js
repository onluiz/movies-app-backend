import { success, failure } from "../libs/response-lib";
import tmdbApi from '../libs/tmdb-api';

export async function main(event, context) {
  try {
    const { page } = event.queryStringParameters;
    const { data } = await tmdbApi.getUpcomingMovies(page);
    tmdbApi.applyGenres(data.results);
    return success(data);
  } catch (e) {
    return failure({ status: false, error: e, });
  }
}
