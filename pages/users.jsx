import React from 'react';

export default function users({ users }) {
    return (
        <div>
            <h1>List of Users :-</h1>
            {users.map((user, index) => (
                <div>
                    <h2>User :- {user.id}</h2>
                    <ul>
                        <li key={index}>id : {user.id}</li>
                        <li key={index}>name : {user.name}</li>
                        <li key={index}>username : {user.username}</li>
                        <li key={index}>email : {user.email}</li>
                        <li key={index}>phone : {user.phone}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('data -> ', data);

    return {
        props: {
            users: data,
        }
    }
}
