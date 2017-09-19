//module to create post model
//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, default: ''},
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    content : {type: String, require: true}
});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;