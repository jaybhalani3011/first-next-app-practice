import Link from 'next/link';
import React from 'react';
// import User from '../../components/user';


export default function PostList({ posts }) {
    return (
        <div>
            <h1>List of Posts :-</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h1>{post.id}</h1>
                    <h2>Title :- {post.title}</h2>
                    <Link href={`userpost/${post.id}`} passHref>read more...</Link><hr />
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            posts: data.slice(0,99),
        }
    }
}
