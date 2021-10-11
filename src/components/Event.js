import React, {useState, useEffect} from 'react'
import { getEvent } from '../api/index';

const Event = () => {
    const [events, setEvents] = useState([]);

    const handleGetEvent = async () => {
        try{
            const res = await getEvent();
            setEvents(res.data);
            console.log(res.data)
        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        handleGetEvent();
    }, [])

    return (
        <div>
            {events.map((event) => (
                <div key={event.id}>
                    <p>{event.title}</p>
                    <p>{event.date}</p>
                    <img src={process.env.REACT_APP_DEV_API_URL + event.image.url} alt="event_image"/>
                </div>
            ))}
        </div>
    )
}

export default Event
