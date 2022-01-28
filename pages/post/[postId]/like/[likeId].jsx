import { useRouter } from 'next/router';
import React from 'react';

export default function Like() {
    const router = useRouter();
    const {postId,likeId} = router.query;
    return (
        <div>
            <h1>Here post/{postId || 'not found'}(👈postId) and {likeId || 'not found'}(👈likeId) in post route !!!</h1>
        </div>
    )
}
