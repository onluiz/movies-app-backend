import tmdbImageApi from '../libs/tmdb-image-api';
import { failure, headers } from "../libs/response-lib";
import { binaryToBase64 } from '../libs/utils';

export async function main(event, context) {
  try {
    const { imagePath } = event.queryStringParameters;
    const { data } = await tmdbImageApi.getImage(imagePath);
    const imageBase64 = binaryToBase64(data);
    return {
      statusCode: 200,
      headers: { ...headers, "Content-Type": "image/jpeg" },
      body: imageBase64,
      isBase64Encoded: true,
    };
  } catch (e) {
    return failure({ status: false, error: e, });
  }
}
