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