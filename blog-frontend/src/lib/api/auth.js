import client from './client.js';

export const login = ({ username, password }) => {
  return client.post('/api/auth/login', { username, password });
};

export const register = ({ username, password }) => {
  return client.post('/api/auth/register', { username, password });
};

export const check = () => client.get('/api/auth/check');
