import client from "./client";

export const getEvent = () => {
    return client.get('/events');
}

export const getNews = () => {
    return client.get('/news')
}

export const getLive = () => {
    return client.get('/lives')
}

export const getDiscography = () => {
    return client.get('/discographies')
}

export const createContact = (params) => {
    return client.post('/contacts', params);
}