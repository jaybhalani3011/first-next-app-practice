import { useRouter } from 'next/router';
import React from 'react';

export default function SingleProduct({ product }) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading... for static generation of the above routes by getStaticPaths.</h1>
    }
    return (
        <>
            <h2>Product&apos;s Description :- </h2><br /><hr /><br />
            <h1>Product {product.id}</h1>
            <h1>Title :- {product.title}</h1>
            <h1>Price :- {product.price}</h1>
            <h1>Description :- {product.description}</h1>
        </>
    )
}

export async function getStaticPaths() {
    // Assigning dynamically path to next.js router
    // const res = await fetch(`http://localhost:4000/products`);
    // const data = await res.json();
    // let paths = [];
    // data.length>0 && data.map((product)=> {
    //     // console.log("product---->",product)
    //         paths.push({
    //             params : {productId : `${product.id}`}
    //         })
    //         // return{
    //         //     params : {productId : `${product.id}`}
    //         // }            
    // })

    // console.log(paths);

    // return {
    //     paths,
    //     fallback: false, //false & true & 'blocking'
    // }

    // Assigning statically dynamic path to next.js router
    return {
        paths: [
            {
                params: { productId: '1' }
            }
        ],
        fallback: true,
    }

}

export async function getStaticProps(context) {
    console.log('Product Detail page is Regenerating');
    const { params } = context; 
    const res = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await res.json();

    console.log(`Generating page for /products/${params.productId}`);
    return {
        props: {
            product: data
        },
        revalidate : 20
    }
}