var express = require('express');
var router = express.Router();

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
