import React from 'react';

export default function PostId({ post }) {
    return (
        <>
            <h2>Post's Description :- </h2><br /><hr /><br />
            <h1>{post.id === 1 ? `${post.id}st post`: post.id === 2 ? `${post.id}nd post` : `${post.id}rd post`}</h1>
            <h1>Title :- {post.title}</h1>
            <h1>Body :- {post.body}</h1>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
        ],
        fallback: false,
    }

}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}