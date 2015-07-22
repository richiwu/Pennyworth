angular.module('recommendController', [])

	.controller('recController',  [ '$scope', '$http', 'Recommendations', function($scope, $http, Recommendations){
		$scope.formData = {};
		$scope.loading =  true;


		//get
		Recommendations.get()
			.success(function(data){
				$scope.recommendations =  data;
				$scope.loading =  false;
			});

		//create
		$scope.createRecommendation =  function()  {
			//if form is empty,  do nothing
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				Recommendations.create($scope.formData)
					.success(function(data){
						$scope.loading = false;
						$scope.formData = {}
						$scope.recommendations = data;
					});
			}
		};

		//delete
		$scope.deleteRecommendation = function(id){
			$scope.loading = true;

			Recommendations.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.recommendations =  data;
				});
		};
	
	}]);
