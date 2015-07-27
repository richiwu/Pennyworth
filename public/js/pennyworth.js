var app = angular.module('pennyworth', ['ngRoute', 'ngResource', 'selector', 'slider','gmap','star-rating', 'recommendController', 'recommendService']).run(function($http, $rootScope){
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

app.config(function($routeProvider){
  $routeProvider
    //the home page display
    .when('/', {
      templateUrl: 'main.html',
      //controller: 'mainController'
    })

    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })

    .when('/signUp', {
      templateUrl: 'signUp.html',
      controller: 'authController'
    })

    .when('/service', {
      templateUrl: 'service.html',
      //controller: 'mainController'
    })

    .when('/profile', {
      templateUrl: 'profile.html',
      //controller: 'mainController'
    });
});

app.controller('authController', function($scope, $http, $rootScope, $location){
  $scope.user = {name: '', email: '', password: '',  passwordRepeat: ''};
  $scope.error_message = '';

  $scope.login = function(){
    $http.post('/login', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.local.email;
        $location.path('/profile');
      }
      else{
        $scope.error_message = data.message.toString();
      }
    });
  };

  $scope.register = function(){
    $http.post('/signup', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.local.email;
        $location.path('/profile');
      }
      else{
        $scope.error_message = data.message.toString();
      }
    })
  };
});

app.directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  }]);
