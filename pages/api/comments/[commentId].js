import commentSchema from "../../../data/comments";
import dbConnect from "../../../lib/dbConnection";


export default async function handler(req, res) {
    await dbConnect();
    
    const { commentId } = req.query;
    if (req.method === 'GET') {        
        try {
            const comment = await commentSchema.findById(commentId);
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(400).json({ message: 'No Comment Found' });
            }
        } catch (error) {
            console.log('here in catch of GET');
            res.status(400).json({ message: `catch ${error}` })
        }
    } else if (req.method === 'DELETE') {        
        try {
            const comment = await commentSchema.findByIdAndDelete(commentId);
            // const comment = await commentSchema.findById(commentId);
            if (comment) {
                res.status(200).json({ message: `${comment.comment} has Deleted !!!!` });
                // res.status(200).json(comment);
            } else {
                res.status(400).json({ message: 'No Comment Found' });
            }
        } catch (error) {
            console.log('here in catch of DELETE');
            res.status(400).json({ message: `catch ${error}` })
        }
    }
}