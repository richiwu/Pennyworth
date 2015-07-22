angular.module('recommendService',  [])


	//each function returns promise object
	.factory('Recommendations', ['$http', function($http) {
		return {
			get : function() {
				return $http.get('/api/recommendations');
			},
			create : function(recommendationData) {
				return $http.post('/api/recommendations',  recommendationData);
			},
			delete: function(id) {
				return $http.delete('/api/recommendations' + id);
			}
		}
	}]);