/**
 * @memberOf module:Users
 * @author Rúben Gomes <gomesruben21@gmail.com>
 * @classdesc Defines a User class. Responsible for the user operations logic.
 */
class User{

    /**
     * Gets all users information.
     * @method module:Users.User.getAll
     * @static
     *
     * @return {Promise} Returns a promise with an array of users as a resolved value.
     */
    static async getAll(){}

    /**
     * Gets a user information.
     * @method module:Users.User.getOne
     * @static
     * @param {String} id Specifies the user id.
     *
     * @return {Promise} Returns a promise with an user object as a resolved value.
     */
    static async getOne(id){}

    /**
     * Gets all user posts information.
     * @method module:Users.User.getPosts
     * @static
     * @param {String} id Specifies the user id.
     *
     * @return {Promise} Returns a promise with an array of user posts objects as a resolved value.
     */
    static async getPosts(id){}

    /**
     * Create a user.
     * @method module:Users.User.create
     * @static
     *
     * @return {Promise} Returns a promise with a created user object as a resolved value.
     */
    static async create(){}

    /**
     * Creates a user post
     * @method module:Users.User.createPost
     * @static
     * @param {String} id Specifies the user id.
     *
     * @return {Promise} Returns a promise with a user post object as a resolved value.
     */
    static async createPost(id){}

    /**
     * Updates a user 
     * @method module:Users.User.update
     * @static
     * @param {String} id Specifies the user id.
     *
     * @return {Promise} Returns a promise with a user object as a resolved value.
     */
    static async update(id){}

    /**
     * Creates a user post
     * @method module:Users.User.updatePost
     * @static
     * @param {String} id Specifies the user id.
     * @param {String} postId Specifies the post id.
     *
     * @return {Promise} Returns a promise with a user post object as a resolved value.
     */
    static async updatePost(id, postId){}

    /**
     * Deletes a user 
     * @method module:Users.User.delete
     * @static
     * @param {String} id Specifies the user id.
     *
     * @return {Promise} Returns a promise with a user object as a resolved value.
     */
    static async delete(id){}

    /**
     * Deletes user posts
     * @method module:Users.User.deletePosts
     * @static
     * @param {String} id Specifies the user id.
     *
     * @return {Promise} Returns a promise with an array of user posts objects as a resolved value.
     */
    static async deletePosts(id){}

    /**
     * Deletes a user post
     * @method module:Users.User.deletePost
     * @static
     * @param {String} id Specifies the user id.
     * @param {String} postId Specifies the post id.
     *
     * @return {Promise} Returns a promise with a user post object as a resolved value.
     */
    static async deletePost(id, postId){}
}

module.exports = User;
