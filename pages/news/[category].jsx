// import { useRouter } from 'next/router';
import React from 'react';

export default function NewsByCategory({ article, category }) {

    return (
        <>
            <h1>News Articles of category <i>{category}</i></h1><hr /><hr />
            {
                article.length > 0 && article.map((article, index) => (
                    <>
                        <div key={index}>
                            <h1>({index + 1}) {article.title}</h1>
                            <h2>Description :- {article.description}</h2>
                            <h2>Content :- {article.content}</h2>
                        </div><hr /><hr />
                    </>
                ))
            }
            {
                article.length === 0 && <div>Sorry,No Article Found in this category !!!!</div>
            }
        </>
    )
}

export async function getServerSideProps(context) {

    const { params, req, res, query } = context;
    // console.log('query --> ', query);
    // console.log('req.headers.cookie --> ', req.headers.cookie);
    // res.setHeader('Set-Cookie', ['name=news']);
    const fetchres = await fetch(`http://localhost:4000/news?category=${params.category}`);
    const data = await fetchres.json();
    
    console.log('Pre-rendering for News Article category --> ', params.category);

    return {
        props: {
            article: data,
            category: params.category
        }, // will be passed to the page component as props
    }
}