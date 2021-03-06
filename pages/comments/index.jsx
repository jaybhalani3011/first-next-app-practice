import React, { useState } from 'react';

export default function index() {

    const [comments, setComments] = useState([]);
    const [message, setMessage] = useState(null);
    const [writeComment, setWriteComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch(`/api/comments`);
        const data = await response.json();
        setComments(data);
    }

    const fetchComment = async (e) => {
        setWriteComment(e);
    }

    const submitComment = async () => {
        if (writeComment === '' && !writeComment) {
            alert('Comment box shouldn\'t be empty ');

        } else {
            const response = await fetch(`/api/comments`, {
                method: 'POST',
                body: JSON.stringify({ comment: writeComment }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            alert(data.message);
            setWriteComment('')
            // setMessage(data.message);     
            // setMessage(null);     
        }
    }

    const deleteHandler = async (id) => {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        alert(data.message);
        // window.location.reload();
        fetchComments();
    }

    return (<>
        <button onClick={fetchComments}>Load Comments</button><br />
        {
            comments.length > 0 && comments.map((comment, index) => (
                <div key={index}>
                    <div key={index}>
                        {index + 1} | {comment.comment} &nbsp;&nbsp;<button onClick={() => deleteHandler(comment._id)}>👈Delete this comment</button>
                    </div><hr />
                </div>
            ))
        }
        <br />
        <input id='input-box' type="text" value={writeComment} onChange={(e) => fetchComment(e.target.value)} /><br />
        <button onClick={() => submitComment()}>Submit Comment</button>&nbsp;&nbsp;{message && alert('New Comment added successfully, make sure you load the Comments')}

    </>);
}
