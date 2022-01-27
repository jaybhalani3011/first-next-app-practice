import Link from 'next/link';
import React from 'react';

export default function indexOfPost({postId = 201}) {
    return (
        <div>
            <h1>Here in post(index of post) route.</h1>
            <h2>
                <Link href={'/post/1'} replace>
                    <a>post :- 1</a>
                </Link>
            </h2>
            <h2>
                <Link href={'/post/2'} >
                    <a>post :- 2</a>
                </Link>
            </h2>
            <h2>
                <Link href={`/post/${postId}`}>
                    <a>post :- {postId}</a>
                </Link>
            </h2>
        </div>
    )
}
