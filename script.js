	var app = angular.module('sabroweb', ['ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'inicio.html',
				controller  : 'mainController'
			})
			.when('/inicio', {
				templateUrl : 'inicio.html',
				controller  : 'mainController'
			})
			.when('/acerca', {
				templateUrl : 'about.html',
				controller  : 'mainController'
			})
			.when('/productos', {
				templateUrl : 'blog.html',
				controller  : 'mainController'
			})
			.when('/productos2', {
				templateUrl : 'blog2.html',
				controller  : 'mainController'
			})
			.when('/productos3', {
				templateUrl : 'blog3.html',
				controller  : 'mainController'
			})
			.when('/productos4', {
				templateUrl : 'blog4.html',
				controller  : 'mainController'
			})
			.when('/galeria', {
				templateUrl : 'gallery.html',
				controller  : 'mainController'
			})
			.when('/galeria2', {
				templateUrl : 'gallery2.html',
				controller  : 'mainController'
			})
			.when('/galeria3', {
				templateUrl : 'gallery3.html',
				controller  : 'mainController'
			})
			.when('/contacto', {
				templateUrl : 'contact.html',
				controller  : 'mainController'
			})
			.when('/cotizacion', {
				templateUrl : 'typography.html',
				controller  : 'mainController'
			})
			.when('/servicios', {
				templateUrl : 'services.html',
				controller  : 'mainController'
			});
	});
	app.controller('mainController', function($scope) {
		$scope.message = '';
	});