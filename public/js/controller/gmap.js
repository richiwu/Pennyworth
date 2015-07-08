'use strict';

var app = angular.module('gmap', ['uiGmapgoogle-maps']);

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAFz5rNYFfhn2F7ffjhJuppahFQmPczp0I',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});

app.controller("mapCtrl", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.


    // uiGmapGoogleMapApi.then(function(maps) {

    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(success, error);
    //   } else {
    //     alert('Geo Location is not supported');
    //   }

    //   function success(position) {
    //     var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    //     var marker = new google.maps.Marker({
    //         position: coords,
    //         map: $scope.map,
    //         title:"You are here!"
    //     });

    //     $scope.map = { center: { latitude: position.coords.latitude, longitude: position.coords.longitude }, zoom: 15 };
    //   }

    //   function error(msg) {
    //     alert('error: ' + msg);
    //   }
    // });

    $scope.map = { center: { latitude: 40.7577, longitude: -73.9857 }, zoom: 14 };
});