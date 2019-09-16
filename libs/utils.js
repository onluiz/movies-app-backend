export function binaryToBase64(data) {
  return new Buffer(data, 'binary').toString('base64');
}