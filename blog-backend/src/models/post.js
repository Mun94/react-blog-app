import mongoose from 'mongoose';

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now
    },
    user:{
        type: ObjectId,
        ref: 'User'
    }
})

const Post = mongoose.model('Post', PostSchema);
export default Post;