import React from 'react';
import User from '../../components/user';
;


export default function PostList({ users }) {
    return (
        <div>
            <h1>List of Users :-</h1>
            {users.map((user, index) => (
                <User user={user} index={index} key={index}/>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log('data -> ', data);

    return {
        props: {
            users: data,
        }
    }
}
