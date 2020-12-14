import client from './client.js';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });
