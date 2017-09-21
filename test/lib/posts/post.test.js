const mongoose = require('mongoose');
const chai = require('chai');
const {expect} = chai;
const User = require('../../../src/lib/users');
const Post = require('../../../src/lib/posts');

chai.use(require('chai-as-promised'));

describe('Post class tests', () => {
    let userId;
    let postId;

    before(done => {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/testBlogApi', { useMongoClient: true});

        const userData = {
            name: 'Ruben',
            email: 'ruben@gmail.com',
            password: '123123'
        };

        User.create(userData)
            .then(user => {
                userId = user._id;
                done();
            });

    });

    it('it should create a post', async () => {
        const postData = {
            title: 'Rest Api',
            description: 'simple blog api',
            content: 'simple blog api',
            author: userId
        };

        const post = await Post.create(postData);

        expect(post).to.be.an('object');
        expect(post).to.have.a.property('_id');
        expect(post).to.have.a.property('title', postData.title);
        expect(post).to.have.a.property('description', postData.description);
        expect(post).to.have.a.property('content', postData.content);
        expect(post).to.have.a.property('author').to.be.an('object');
        expect(post.author).to.have.a.property('name', 'Ruben');
        expect(post.author).to.have.a.property('email', 'ruben@gmail.com');

        postId = post._id;
    });

    it('it should get all the posts', async () => {
        const posts = await Post.getAll();
        expect(posts).to.be.an('array').with.length(1);
    });

    it('it should get one post', async () => {
        const post = await Post.getOne(postId);

        expect(post).to.be.an('object');
        expect(post).to.have.a.property('_id');
        expect(post).to.have.a.property('title');
        expect(post).to.have.a.property('description');
        expect(post).to.have.a.property('content');
        expect(post).to.have.a.property('author').to.be.an('object');
        expect(post.author).to.have.a.property('name', 'Ruben');
        expect(post.author).to.have.a.property('email', 'ruben@gmail.com');
    });

    it('it should update a post', async () => {
        const updatePostData = {
            title: 'Rest Api update',
            description: 'simple blog api update',
            content: 'simple blog api update'
        };

        const post = await Post.update(postId, updatePostData);
        expect(post).to.be.an('object');
        expect(post).to.have.a.property('_id');
        expect(post).to.have.a.property('title', updatePostData.title);
        expect(post).to.have.a.property('description', updatePostData.description);
        expect(post).to.have.a.property('content', updatePostData.content);
        expect(post).to.have.a.property('author').to.be.an('object');
        expect(post.author).to.have.a.property('name', 'Ruben');
        expect(post.author).to.have.a.property('email', 'ruben@gmail.com');
    });

    it('it should delete a post', async () => {
        const post = await Post.delete(postId);
        expect(post).to.be.an('object').not.empty;

        const posts = await Post.getAll();

        expect(posts).to.be.an('array').empty;
    });

    after(done => {
        User.delete(userId).then(() => done());
    });
});