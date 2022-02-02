import useSWR from "swr";
import React from 'react';

const fetcher = async () => {
    const response = await fetch(`http://localhost:4000/dashboard`)
    const data = await response.json();
    return data;
}

export default function DashboardSwr() {

    const { data, error } = useSWR('dashboard-csdf', fetcher)

    if (error) return 'An error occured while fetching data';
    if (!data) return 'Loading !!!!';
    return (
        <>
            <h1>Dashboard Data</h1>
            <h2>Posts :- {data.posts}</h2>
            <h2>Likes :- {data.likes}</h2>
            <h2>Followers :- {data.followers}</h2>
            <h2>Following :- {data.following}</h2>
        </>
    );
}
