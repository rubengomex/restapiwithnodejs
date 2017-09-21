/**
 * @module Util
 * @author Rúben Gomes <gomesruben21@gmail.com>
 */

//add utility methods
//

const moment = require('moment');
const jwt = require('jwt-simple');
const {User: UserModel} = require('../models');
const jwtSecret = 'BlogApiSecret';

module.exports = {
    authenticate,
    generateToken,
};

/**
 * A middleware to authenticate the user based on a token
 * @param  {Object}   req  Specifies the request object.
 * @param  {Object}   res  Specifies the response object
 * @param  {Object} next Specifies the function to be call to trigger the next middleware
 */
function authenticate(req, res, next){
    const token = req.query.access_token || null;
    if(!token){
        return res.status(400).json({status: 400, message: 'No token provided'});
    }

    let payload;
    try {
        payload = jwt.decode(token, jwtSecret);
    }catch(err){
        return res.status(400).json({status: 400, message: 'Token invalid'});
    }

    let now = moment().unix();

    if(now > payload.exp) {
        return res.status(400).json({status: 400, message: 'Token has expired'});
    }

    UserModel.findById(payload.sub)
        .then(user => {
            if(!user){
                return res.status(401).json({status: 401, message: 'User no longer exists'});
            }

            next();
        })
        .catch(err => {
            res.status(500).json({status: 500, message: 'Internal server error', error: err});
        });
}

/**
 * Generates a token based on a valid email and password.
 * @param  {Object} req Specifies the request object
 * @param  {Object} res Specifies the response object
 * @return {Object}     Returns an object with the token property.
 */
function generateToken(req, res){
    UserModel.findOne({email: req.body.email})
        .then(user => {
            if(!user){
                return res.status(401).json({status: 401, message: 'Authentication failed. email or password wrong'});
            }

            if(user.password !== req.body.password){
                return res.status(401).json({status: 401, message: 'Authentication failed. email or password wrong'});
            }

            let payload = {
                exp: moment().add(14,'days').unix(), // valid for 14 days
                iat: moment().unix(),
                sub: user._id}
            ;

            let token = jwt.encode(payload, jwtSecret);

            res.json({ status: 200, message: 'Enjoy your token!', token});

        })
        .catch(err => {
            res.status(500).json({status: 500, message: 'Internal server error', error: err});
        });
}