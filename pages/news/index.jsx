import Link from 'next/link';
import React from 'react';

export default function NewsList({articles}) {
    return (
        <div>
            <h1>List of News Articles :-</h1>
            {articles.map((article, index) => (
                <div key={index}>
                    <h1>{article.id}</  h1>
                    <h2>Title :- {article.title}</h2>
                    <h2>category :- {article.category}</h2>                
                    {/* <Link href={`article/${article.id}`} passHref>read more...</Link><hr /> */}
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context) {

    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();

    console.log('Pre-rendering for News Article List --> ');

    return {
        props: {
            articles: data,
        }, // will be passed to the page component as props
    }
}