//const Post = require('../lib/posts');

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};

/**
 * @api {get} posts Get all posts
 * @apiDescription Gets an array will all posts information.
 * @apiGroup Posts
 * @apiVersion 1.0.0
 * @apiSuccess {Array} posts Returns an array of posts objects
 * @apiSuccessExample {json} Response
 *  [{
 *     id: "1ab",
 *     title: "REST API's WITH NODE.JS",
 *     description: "Simple blog API using Node.JS and MongoDB",
 *     author: {
 *         id: "12c",
 *         name: "Ruben"
 *     },
 *     content: "Some content"
 *   }, {
 *         ...
 * }]
 */
function getPosts(req, res, next){
    res.json({method: 'getPosts'});
    next();
}

/**
 * @api {get} posts/:id Get a post information
 * @apiDescription Gets an object
 * @apiGroup Posts
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Specifies the id of the post to be retrieved. This is a request param.
 * @apiSuccess {Object} post Returns a post object.
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
function getPost(req, res, next){
    res.json({method: 'getPost'});
    next();
}


/**
 * @api {post} posts Creates a post
 * @apiDescription Creates a post
 * @apiGroup Posts
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} title Specifies the title of the post. This is a body param.
 * @apiParam {String=""} [description] Specifies the description of the post. This is a body param.
 * @apiParam {String} authorId Specifies the author id of the post. This is a body param.
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
function createPost(req, res, next){
    res.json({method: 'createPost'});
    next();
}

/**
 * @api {put} posts/:id Updates a post
 * @apiDescription Updates a post
 * @apiGroup Posts
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Specifies the id of the post to be updated. This is a request param.
 * @apiParam {String} title Specifies the title of the post. This is a body param.
 * @apiParam {String=""} [description] Specifies the description of the post. This is a body param.
 * @apiParam {String} authorId Specifies the author id of the post. This is a body param.
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
 *     content: "Update content"
 * }
 */
function updatePost(req, res, next){
    res.json({method: 'updatePost'});
    next();
}

/**
 * @api {delete} posts/:id Deletes a post
 * @apiDescription Deletes a post
 * @apiGroup Posts
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Specifies the id of the post to be deleted. This is a request param.
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
function deletePost(req, res, next){
    res.json({method: 'deletePost'});
    next();
}