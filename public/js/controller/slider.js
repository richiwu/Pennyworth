'use strict';

var app = angular.module('slider', ['angular-slidezilla'])

app.controller('sliderCtrl', ['$scope',function($scope){

    //set slider value as a number to have 1 slider
    //all properties default values
    $scope.slider1 = {val:10};
    
    //set value as an array to have 2 sliders
    $scope.slider2 = { val:[16,100] };

}]);