// import { useRouter } from 'next/router';
import React from 'react';

export default function PostId({ post }) {
    // const router = useRouter();
    // if (router.isFallback) {
    //     return <h1>Loading... for static generation of the above routes by getStaticPaths.</h1>
    // }
    return (
        <>
            <h2>Post&apos;s Description :- </h2><br /><hr /><br />
            <h1>post {post.id}</h1>
            <h1>Title :- {post.title}</h1>
            <h1>Body :- {post.body}</h1>
        </>
    )
}

export async function getStaticPaths() {
    // Assigning dynamically path to next.js router
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    let paths = [];
    data.length>0 && data.map((user)=> {
        // console.log("user---->",user)
        if (user.id < 100) {
            paths.push({
                params : {postId : `${user.id}`}
            })
            // return{
            //     params : {postId : `${user.id}`}
            // }            
        }
    })

    // console.log(paths);

    return {
        paths,
        fallback: 'blocking', //false & true
    }

    // Assigning statically dynamic path to next.js router
    // return {
    //     paths: [
    //         {
    //             params: { postId: '1' }
    //         },
    //         {
    //             params: { postId: '2' }
    //         },
    //         {
    //             params: { postId: '3' }
    //         },
    //     ],
    //     fallback: true,
    // }

}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    console.log(`Generating page for /userpost/${params.postId}`);
    return {
        props: {
            post: data
        }
    }
}