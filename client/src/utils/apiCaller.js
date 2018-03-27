import axios from 'axios';
import moment from 'moment-timezone';

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
  const userEmail = localStorage.getItem('chatting_app_user_email');
  if (token && userEmail) {
    token = JSON.parse(token);
    if (moment(token.expiresIn) < moment()) {
      // TODO: Call REFRESH API
    }
    config.headers.Authorization = `${token.tokenType} ${token.accessToken}`;
  }
  return axios(config);
};
