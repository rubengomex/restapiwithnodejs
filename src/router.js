const express = require('express');
const router = express.Router();
const {userController, postController} = require('./controllers');
const {
    getUsers,
    getUser,
    getUserPosts,
    createUser,
    createUserPost,
    updateUserPost,
    deleteUser,
    deleteUserPosts,
    deleteUserPost
} = userController;

const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = postController;

/**
 * User routes
 */
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.get('/users/:id/posts', getUserPosts);

router.post('/users/', createUser);
router.post('/users/:id/posts', createUserPost);

router.put('/users/:id/posts/:postId', updateUserPost);

router.delete('/users/:id', deleteUser);
router.delete('/users/:id/posts', deleteUserPosts);
router.delete('/users/:id/posts/:postId', deleteUserPost);

/**
 * Post routes
 */

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);

router.post('/posts', createPost);

router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
