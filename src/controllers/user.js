//const User = require('../lib/users');

module.exports = {
    getUsers,
    getUser,
    getUserPosts,
    createUser,
    createUserPost,
    updateUserPost,
    deleteUser,
    deleteUserPosts,
    deleteUserPost
};

/**
 * @api {get} users Get all users
 * @apiDescription Gets an array will all users names and emails.
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiSuccess {Object} post Returns an user object.
 * @apiSuccessExample {json} Response
 * [{
 *     id: "1bd"
 *     name: "Ruben",
 *     email: "ruben@gmail.com"
 * }, {
 *    ...
 * },...
 * ]
 */
function getUsers(req, res, next){
    res.json({method: 'getUsers'});
    next();
}

/**
 * @api {get} users/:id Get a user information
 * @apiDescription Gets an user object
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Specifies the id of the user to be retrieved. This is a request param.
 * @apiSuccess {Object} user Returns an user object.
 * @apiSuccessExample {json} Response
 * {
 *     id: "1bd",
 *     name: "gomes"
 *     email: "gomes@gmail.com",
 * }
 */
function getUser(req, res, next){
    res.json({method: 'getUser'});
    next();
}

/**
 * @api {get} users/:id/posts Get all user posts
 * @apiDescription Gets an array will all user posts information.
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiSuccess {Array} posts Returns an array of posts objects that belongs to the user
 * @apiSuccessExample {json} Response
 *  [{
 *     id: "1ab",
 *     title: "REST API's WITH NODE.JS",
 *     description: "Simple blog API using Node.JS and MongoDB",
 *     author: {
 *         id: "1bd",
 *         name: "gomes"
 *     },
 *     content: "Some content"
 *   }, {
 *         ...
 * }]
 */
function getUserPosts(req, res, next){
    res.json({method: 'getUserPosts'});
    next();
}

/**
 * @api {post} users Creates a user
 * @apiDescription Creates a user
 * @apiGroup Users
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} name Specifies the name of the user. This is a body param.
 * @apiParam {String} email Specifies the description of the user. This is a body param.
 * @apiParam {String} password Specifies the password of the user. This is a body param.
 * @apiSuccess {Object} user Returns the created user object.
 * @apiSuccessExample {json} Response
 * {
 *     id: "1bd",
 *     name: "gomes"
 *     email: "gomes@gmail.com"
 * }
 */
function createUser(req, res, next){
    res.json({method: 'createUser'});
    next();
}

/**
 * @api {post} users/:id/posts Creates a user post
 * @apiDescription Creates a user post
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiParam {String} id Specifies the user id that the post will be attached. This is a request param.
 * @apiParam {String} title Specifies the title of the post. This is a body param.
 * @apiParam {String=""} [description] Specifies the description of the post. This is a body param.
 * @apiParam {String} content Specifies the content of the post. This is a body param.
 * @apiSuccess {Object} post Returns the create post object.
 * @apiSuccessExample {json} Response
 * {
 *     id: "1ab",
 *     title: "REST API's WITH NODE.JS",
 *     description: "Simple blog API using Node.JS and MongoDB",
 *     author: {
 *        id: "12c",
 *        name: "Ruben"
 *     },
 *     content: "Some content"
 * }
 */
function createUserPost(req, res, next){
    res.json({method: 'createUserPost'});
    next();
}

/**
 * @api {post} users/:id/posts/:postId Updates a user post
 * @apiDescription Updates a user post
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiParam {String} id Specifies the user id that the post will be updated. This is a request param.
 * @apiParam {String} postId Specifies the post id that the be updated. This is a request param.
 * @apiParam {String} title Specifies the title of the post. This is a body param.
 * @apiParam {String=""} [description] Specifies the description of the post. This is a body param.
 * @apiParam {String} content Specifies the content of the post. This is a body param.
 * @apiSuccess {Object} post Returns the updated post object.
 * @apiSuccessExample {json} Response
 * {
 *     id: "1ab",
 *     title: "REST API's WITH NODE.JS",
 *     description: "Simple blog API using Node.JS and MongoDB",
 *     author: {
 *        id: "12c",
 *        name: "Ruben"
 *     },
 *     content: "updated content"
 * }
 */
function updateUserPost(req, res, next){
    res.json({method: 'updateUserPost'});
    next();
}

/**
 * @api {delete} users/:id Deletes a user
 * @apiDescription Deletes a user
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Specifies the id of the user to be deleted. This is a request param.
 * @apiSuccessExample {json} Response
 * {
 *     id: "1bd",
 *     name: "gomes"
 *     email: "gomes@gmail.com"
 * }
 */
function deleteUser(req, res, next){
    res.json({method: 'deleteUser'});
    next();
}

/**
 * @api {delete} users/:id/posts Deletes all user posts
 * @apiDescription Delets all user posts information.
 * @apiGroup Users
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} id Specifies the user id that the posts will be deleted. This is a request param.
 * 
 * @apiSuccess {Array} posts Returns an array of deleted posts objects that belongs to the user
 * @apiSuccessExample {json} Response
 *  [{
 *     id: "1ab",
 *     title: "REST API's WITH NODE.JS",
 *     description: "Simple blog API using Node.JS and MongoDB",
 *     author: {
 *         id: "1bd",
 *         name: "gomes"
 *     },
 *     content: "Some content"
 *   }, {
 *         ...
 * }]
 */
function deleteUserPosts(req, res, next){
    res.json({method: 'deleteUserPosts'});
    next();
}

/**
 * @api {delete} users/:id/posts/:postId Deletes a user post
 * @apiDescription Deletes a user post
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiParam {String} id Specifies the user id that the post will be deleted. This is a request param.
 * @apiParam {String} postId Specifies the post id that the be deleted. This is a request param.
 * @apiSuccess {Object} post Returns the deleted post object.
 * @apiSuccessExample {json} Response
 * {
 *     id: "1ab",
 *     title: "REST API's WITH NODE.JS",
 *     description: "Simple blog API using Node.JS and MongoDB",
 *     author: {
 *        id: "12c",
 *        name: "Ruben"
 *     },
 *     content: "updated content"
 * }
 */
function deleteUserPost(req, res, next){
    res.json({method: 'deleteUserPost'});
    next();
}