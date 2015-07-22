var Recommendation = require('./models/recommendation');

function getRecommendations(res){
	Recommendation.find(function(err, recommendations) {
		if (err)
			res.send(err)
		res.json(recommendations);
	});
};

module.exports =  function(app) {

	//api 
	//HTTP GET
	app.get('/api/recommendations', function(req,res){
		getRecommendations(res);
	});

	//HTTP  POST
	app.post('/api/recommendations', function(req,res){
		Recommendation.create({
			text: req.body.text,
			done: false
		}, function(err, recommendation){
			if (err)
				res.send(err);

			//return all  recommendations after new creation
			getRecommendations(res);
		});
	});

	//HTTP DELETE
	app.delete('/api/recommendations/:recommendation_id', function(req,res) {
		Recommendation.remove({
			_id : req.params.recommendation_id
		}, function(err,  recommendation){
			if (err)
				res.send(err);

			getRecommendations(res);
		});
	});

	//application
	// app.get('*', function(req,res){
	// 	res.sendfile('./public/profile.html');
	// });
};