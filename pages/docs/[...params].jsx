import React from 'react';
import { useRouter } from 'next/router';

export default function docs() {
    const router = useRouter();
    const { params } = router.query;
    console.log(params); //Found the array of all the nested params after docs... 
    return ( 
        <div>
            <h1> lvgkdfglHere in docs with catch all routes.</h1>
        </div>
    )
}
