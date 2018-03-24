import axios from 'axios';

const baseUrl = '/api/v1';

export const anonymousRequest = (method, path, options = {}) => {
  const config = {
    method,
    url: baseUrl + path,
  };
  if (options.body) {
    config.data = options.body;
  }
  config.headers = { 'Content-Type': 'application/json' };
  return axios(config);
};
