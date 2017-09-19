const {Post: PostModel} = require('../models');

/**
 * @memberOf module:Posts
 * @author Rúben Gomes <gomesruben21@gmail.com>
 * @classdesc Defines a Post class. Responsible for the post operations logic.
 */
class Post{

    /**
     * Gets all posts information.
     * @method module:Posts.Post.getAll
     * @static
     *
     * @return {Promise} Returns a promise with an array of posts as a resolved value.
     */
    static async getAll(){
        return await PostModel.find().populate('author', 'name email');
    }

    /**
     * Gets a post information.
     * @method module:Posts.Post.getOne
     * @static
     *
     * @param {String} id Specifies the post id
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async getOne(id){
        return await PostModel.findById(id).populate('author', 'name email');
    }

    /**
     * Creates a post
     * @method module:Posts.Post.create
     * @static
     *
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async create(data){
        const post = await new PostModel(data).save();//.populate('author', 'name email');
        return await Post.getOne(post._id);
    }

    /**
     * Updates a post information.
     * @method module:Posts.Post.update
     * @static
     *
     * @param {String} id Specifies the post id
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async update(id, data){
        const post = await PostModel.findByIdAndUpdate(id, {$set: data}, {new: true});
        return await Post.getOne(post._id);
    }

    /**
     * Deletes a post information.
     * @method module:Posts.Post.delete
     * @static
     *
     * @param {String} id Specifies the post id
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async delete(id){
        return await PostModel.findByIdAndRemove(id);
    }

}

module.exports = Post;
