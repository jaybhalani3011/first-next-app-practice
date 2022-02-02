import React, { useState, useEffect } from 'react';

export default function dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [dbdata, setDbdata] = useState(null);
    useEffect(() => {
        async function fetchdbData() {
            const response = await fetch(`http://localhost:4000/dashboard`)
            const data = await response.json();
            setDbdata(data);
            setIsLoading(false);
        }
        fetchdbData();
    }, []);
    
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    console.log('dbdata',dbdata);
    return (
        <>
            <h1>Dashboard Data</h1>
            <h2>Posts :- {dbdata.posts}</h2>
            <h2>Likes :- {dbdata.likes}</h2>
            <h2>Followers :- {dbdata.followers}</h2>
            <h2>Following :- {dbdata.following}</h2>
        </>
    );
}
