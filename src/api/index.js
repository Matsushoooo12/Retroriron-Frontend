import client from "./client";

export const getEvent = () => {
    return client.get('/events');
}