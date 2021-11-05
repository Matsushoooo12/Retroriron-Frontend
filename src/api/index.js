import client from './client';

export const getNews = () => {
  return client.get('/news');
};

export const getLive = () => {
  return client.get('/lives');
};

export const getDiscography = () => {
  return client.get('/discographies');
};

export const createContact = (params) => {
  return client.post('/contacts', params);
};

export const createTicket = (params) => {
  return client.post('/tickets', params);
};
