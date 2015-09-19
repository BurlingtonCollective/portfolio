var app = angular.module('portfolio', ['ngRoute', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []),
		services = angular.module('app.services', []),
		directives = angular.module('app.directives', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/layout/home.html',
			controller: 'HomeCtrl',
			pageTitle: 'Home'
		})
		.when('/projects', {
			templateUrl: 'partials/layout/projects.html',
			controller: 'ProjectsCtrl',
			pageTitle: 'Projects'
		});
}]);