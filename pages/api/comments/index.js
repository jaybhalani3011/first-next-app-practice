import commentSchema from "../../../data/comments";
import dbConnect from "../../../lib/dbConnection";

export default async function handler(req, res) {
    console.log('Here in api');
    await dbConnect()
    if (req.method === 'GET') {
        try {
            const comments = await commentSchema.find({});
            if (comments) {
                res.status(200).json(comments);
            }else{
                res.status(400).json({ message: 'No Comments Found' });                
            }
        } catch (error) {
            res.status(400).json({ message: error })
        }
    } else if (req.method === 'POST') {
        const comment = req.body.comment;
        try {
            const commentObj = new commentSchema({
                comment
            })
            const doc = await commentObj.save()
            if (doc) {
                res.status(200).json({ message: 'New Comment added successfully' });
            }
        } catch (error) {
            res.status(400).json({ message: error })
        }

    }
}
