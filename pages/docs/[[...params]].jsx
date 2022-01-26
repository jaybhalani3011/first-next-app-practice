import React from 'react';
import { useRouter } from 'next/router';

<<<<<<< HEAD:pages/docs/[[...params]].jsx
export default function docsAndDocsParams() {
=======
export default function docsparams() {
>>>>>>> 6b3d421f6391fbe4f9eb12c2a2e3c261e763252b:pages/docs/[...params].jsx
    const router = useRouter();
    const { params } = router.query;
    console.log(params); //Found the array of all the nested params after docs... 
    return ( 
        <div>
            <h1>Here in docs with catch all routes.</h1>
        </div>
    )
}
