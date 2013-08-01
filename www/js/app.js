'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});

        $routeProvider.when('/viewTraining', {templateUrl: 'partials/trainingView.html'});
        $routeProvider.when('/viewAddTraining', {templateUrl: 'partials/addTrainingView.html'});

	    $routeProvider.when('/viewGoals', {templateUrl: 'partials/goalsView.html'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);
