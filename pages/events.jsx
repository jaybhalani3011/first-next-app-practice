import { useRouter } from 'next/router';
import React, { useState } from 'react';

//Pre rendering + Client side Data Fetching
export default function EventList({ events }) {
    const router = useRouter();
    const [eventsState, setEventsState] = useState(events);

    const fetchSportsEvent = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEventsState(data);
        router.push('/events?category=sports', undefined, { shallow: true })
    }
    return (
        <>
            <button onClick={fetchSportsEvent}>Sports Events Only</button>
            <h1>{eventsState[1].category === 'sports' ? 'List of Sports Events :-' : 'List of Events :-'}</h1><hr />
            {eventsState.map((event, index) => (
                <>
                    <div key={index}>
                        <h1>{event.id}</  h1>
                        <h2>Title :- {event.title}</h2>
                        <h3>Category :- {event.category}</h3>
                        <h3>Date :- {event.event_dates}</h3>
                    </div><hr />
                </>
            ))}
        </>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    console.log('query --> ',query);
    const queryString = query.category ? 'category=sports' : '';
    const res = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await res.json();

    return {
        props: {
            events: data,
        }, // will be passed to the page component as props
    }
}