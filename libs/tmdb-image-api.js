import axios from 'axios';

const tmdbImageApiInstance = axios.create({
  baseURL: process.env.tmdbImageApiUrl,
  responseType: 'arraybuffer',
});

const tmdbImageApi = {
  getImage(path = '', width = 'w500') {
    return tmdbImageApiInstance.get(`/${width}/${path}`);
  }
};

export default tmdbImageApi;