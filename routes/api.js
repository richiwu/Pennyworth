var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Post = mongoose.model('Post');
var User = mongoose.model('User');

//Used for routes that must be authenticated.
isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if(req.method === "GET"){
        return next();
    }
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
};

router.route('/posts')
	
	.get(function(req, res){
		res.send({message: 'yoloswag get'});
	})

	.post(function(req,res){
		res.send({message: 'guccisoldier post'})
	});

router.route('/posts/:id')

    //create
    .put(function(req,res){
        return res.send({message:'TODO modify an existing post by using param ' + req.params.id});
    })

    .get(function(req,res){
        return res.send({message:'TODO get an existing post by using param ' + req.params.id});
    })

    .delete(function(req,res){
        return res.send({message:'TODO delete an existing post by using param ' + req.params.id})
    });

module.exports = router;
