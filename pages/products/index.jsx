import Link from 'next/link';
import React from 'react';
// import User from '../../components/user';


export default function ProductList({ products }) {
    return (
        <div>
            <h1>List of Products :-</h1>
            {products.map((product, index) => (
                <div key={index}>
                    <h1>{product.id}</h1>
                    <h2>Title :- {product.title}</h2>
                    <Link href={`products/${product.id}`} passHref>read more...</Link><hr />
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    console.log('Product list is Regenerating');
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    return {
        props: {
            products: data.slice(0,1),
        },
        revalidate : 30
    }
}
