var app = angular.module('pennyworth', ['ngRoute', 'ngResource', 'selector', 'slider','gmap','star-rating']).run(function($http, $rootScope){
	$rootScope.authenticated = false;
	$rootScope.current_user = "";

	$rootScope.signout = function(){
		$http.get('auth/signout');
		$rootScope.authenticated = false;
		$rootScope.current_user = "";	
	}

	$rootScope.login =  function(){
		$rootScope.authenticated  = true;
	}


});

// app.config(function($routeProvider){
//   $routeProvider
//     //the home page display
//     .when('/', {
//       templateUrl: 'main.html',
//       controller: 'mainController'
//     })
// });


// services
// $scope.services =  [
//   {
//     serv: 'babysit_service.jpg'
//   },
//   {
//     serv: 'clean_service.jpg'
//   },
//   {
//     serv: 'cook_service.jpg'
//   },
//   {
//     serv: 'driver_service.jpg'
//   },
//   {
//     serv:  'move_service.jpg'
//   },
//   {
//     serv: 'tutor_service.jpg'
//   }

// ];



// app.factory('postService', function($resource){
//   return $resource('/api/posts/:id');
// });

// app.controller('mainController', function($scope, $rootScope, postService){
//   $scope.posts = postService.query();
//   $scope.newPost = "";

// //used for basic read from json
//   postService.getAll().success(function(data){
//     $scope.posts = data;
//   });

//   $scope.post = function() {
//     postService.save({created_by: $rootScope.current_user, text: $scope.newPost, created_at: Date.now()}, 
//     function(){
//       $scope.posts = postService.query();
//       $scope.newPost = "";  
//     });
//   };
//   $scope.delete = function(post)  {
//     postService.delete({id: post._id});
//     $scope.posts = postService.query();
//   };
// });

app.controller('authController', function($scope, $http, $rootScope, $location){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
  	$rootScope.authenticated  = true;
  };

  $scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data){
      if(data.state == 'success'){
        console.log('setting rootScope.authenticated to true');
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else{
        console.error("error is in pennyworth.js");
        $scope.error_message = data.message;
      }
    });
  };
});