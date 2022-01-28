import React from 'react';
import { useRouter } from 'next/router';

export default function IndexOfPostId() {
    const router = useRouter();
    const postId = router.query.postId;
    return (
        <div>
            <h1>Here post/{postId}(👈postId) in post route.</h1>
        </div>
    )
}
