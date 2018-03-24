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

export const authorizedRequest = (method, path, options = {}) => {
  const config = {
    method,
    url: baseUrl + path,
  };
  if (options.body) {
    config.data = options.body;
  }
  config.headers = { 'Content-Type': 'application/json' };
  let token = localStorage.getItem('chatting_app_token');
  if (token) {
    token = JSON.parse(token);
    config.headers.Authorization = `${token.tokenType} ${token.accessToken}`;
  }
  return axios(config);
};
