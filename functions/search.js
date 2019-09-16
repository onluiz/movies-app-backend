import tmdbApi from '../libs/tmdb-api';
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  try {
    const { query, page } = event.queryStringParameters;
    const { data } = await tmdbApi.searchMovie(query, page);
    tmdbApi.applyGenres(data.results);
    return success(data);
  } catch (e) {
    return failure({ status: false, error: e, });
  }
}
