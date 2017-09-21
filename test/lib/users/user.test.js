const mongoose = require('mongoose');
const chai = require('chai');
const {expect} = chai;
const User = require('../../../src/lib/users');


chai.use(require('chai-as-promised'));

describe('User class tests', () => {

    let userId;
    let postId;
    before(done => {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/testBlogApi', {useMongoClient: true});
        const connection = mongoose.connection;

        connection.on('open', done);
    });


    it('it should create a user', async () => {
        const data = {
            name: 'Ruben',
            email: 'ruben@gmail.com',
            password: '123'
        };

        const user = await User.create(data);

        expect(user).to.be.an('object');
        expect(user).to.have.a.property('_id');
        expect(user).to.have.a.property('name', data.name);
        expect(user).to.have.a.property('email', data.email);

        userId = user._id;
    });


    it('it should get all users', async () => {
        const users = await User.getAll();

        expect(users).to.be.an('array').with.length.above(0);
    });

    it('it should get one user', async () => {
        const user = await User.getOne(userId);
        expect(user).to.be.an('object');

        expect(user).to.have.a.property('_id');
        expect(user).to.have.a.property('name');
        expect(user).to.have.a.property('email');
    });

    // todo
    it('it should update a user', async () => {

    });

    it('it should create a user post', async () => {
        const postData = {
            title: 'Rest api',
            description: 'Simple blog api',
            content: 'simple blog api with nodeJs'
        };
        const post = await User.createPost(userId, postData);
        expect(post).to.be.an('object');
        expect(post).to.have.property('_id');
        expect(post).to.have.a.property('title', postData.title);
        expect(post).to.have.a.property('description', postData.description);
        expect(post).to.have.a.property('content', postData.content);
        expect(post).to.have.a.property('author').to.be.an('object');
        expect(post.author).to.have.a.property('name');
        expect(post.author).to.have.a.property('email');

        postId = post._id;
    });

    it('it should update a user post', async () => {
        const updateData = {
            title: 'Api',
            description: 'Update description',
            content: 'update Content'
        };

        const post = await User.updatePost(userId, postId, updateData);
        expect(post).to.be.an('object');
        expect(post).to.have.a.property('title', updateData.title);
        expect(post).to.have.a.property('description', updateData.description);
        expect(post).to.have.a.property('content', updateData.content);
        expect(post).to.have.a.property('author');
    });

    it('it should get all posts from a user', async () => {
        const postData = {
            title: '2 post',
            description: '2 post',
            content: '2 post'
        };

        const post = await User.createPost(userId, postData);
        expect(post).to.be.an('object').not.empty;

        const posts = await User.getPosts(userId);
        expect(posts).to.be.an('array').with.length(2);
    });

    it('it should delete a post from a user', async () => {
        const post = await User.deletePost(userId, postId);
        expect(post).to.be.an('object');

        const posts = await User.getPosts(userId);
        expect(posts).to.be.an('array').with.length(1);
    });

    it('it should delete all the post from a user', async () => {
        const response = await User.deletePosts(userId);
        expect(response).to.be.an('object');
        expect(response).to.have.a.property('result');
        expect(response.result).to.have.a.property('n', 1);
        expect(response.result).to.have.a.property('ok', 1);
    });

    it('it should delete a user', async () => {
        const deletedUser = await User.delete(userId);

        expect(deletedUser).to.be.an('object');
        expect(deletedUser).to.have.a.property('_id');
        expect(deletedUser).to.have.a.property('name');
        expect(deletedUser).to.have.a.property('email');
    });
});