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
    static async getAll(){}

    /**
     * Gets a post information.
     * @method module:Posts.Post.getOne
     * @static
     *
     * @param {String} id Specifies the post id
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async getOne(id){}

    /**
     * Creates a post
     * @method module:Posts.Post.create
     * @static
     *
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async create(){}

    /**
     * Updates a post information.
     * @method module:Posts.Post.update
     * @static
     *
     * @param {String} id Specifies the post id
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async update(id){}

    /**
     * Deletes a post information.
     * @method module:Posts.Post.delete
     * @static
     *
     * @param {String} id Specifies the post id
     * @return {Promise} Returns a promise with a post object as a resolved value.
     */
    static async delete(id){}

}

module.exports = Post;
