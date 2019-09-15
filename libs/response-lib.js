export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Credentials": false
};

function buildResponse(statusCode, body) {
  return { statusCode, headers, body: JSON.stringify(body) };
}
