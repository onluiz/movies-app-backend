import tmdbApi from '../libs/tmdb-api';
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  try {
    const { id } = event.pathParameters;
    const { data } = await tmdbApi.getById(id);
    return success(data);
  } catch (e) {
    return failure({ status: false, error: e, });
  }
}
