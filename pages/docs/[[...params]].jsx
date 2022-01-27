import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function docsAndDocsParams() {
    const router = useRouter();
    const { params } = router.query;
    console.log(params); //Found the array of all the nested params after docs... 
    return ( 
        <div>
            <Link href='/'><a>Bach to home ⬅</a></Link>
            <h1>Here we are in master branch docs with catch all routes.</h1>
        </div>
    )
}
