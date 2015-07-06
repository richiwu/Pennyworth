'use strict';

var myApp = angular.module('myapp', ['angular-slidezilla'])

myApp.controller('sliderdemo', ['$scope',function($scope){

    //set slider value as a number to have 1 slider
    //all properties default values
    $scope.slider1 = {val:1};
    
    //set value as an array to have 2 sliders
    $scope.slider2 = { val:[10,100] };

}]);
