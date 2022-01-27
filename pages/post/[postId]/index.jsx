import { useRouter } from 'next/router';
import React from 'react';

export default function indexOfPostId() {
    const router = useRouter();
    const postId = router.query.postId;
    return (
        <div>
            <h1>Here post/{postId}(👈postId) in post route.</h1>
        </div>
    )
}
