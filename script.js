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
				templateUrl : 'cotizacion.html',
				controller  : 'main'
			})
			.when('/servicios', {
				templateUrl : 'services.html',
				controller  : 'mainController'
			});
	});

	app.controller('mainController', function($scope) {
		$scope.message = '';
		$scope.saludo="Hola";
	});

	app.controller('main', function($scope){
	
	$scope.control=1;
	$scope.sp="";
	$scope.saludo="Hola";
	$scope.dulces=[
		{nombreDulce:"Dulce picosito 1", control:false, tipo:"picosito", imagen:"images/productos/sabroricos-20.jpg",seleccion:""},
		{nombreDulce:"Dulce picosito 2", control:false, tipo:"picosito", imagen:"images/productos/sabroricos-24.jpg",seleccion:""},
		{nombreDulce:"Dulce salado 2", control:false, tipo:"salado", imagen:"images/productos/sabroricos-26.jpg",seleccion:""},
		{nombreDulce:"Dulce salado 3", control:false, tipo:"salado", imagen:"images/productos/sabroricos-33.jpg",seleccion:""},
		{nombreDulce:"Dulce tamarindo 2", control:false, tipo:"tamarindo", imagen:"images/productos/sabroricos-35.jpg",seleccion:""},
		{nombreDulce:"Dulce tamarindo 3", control:false, tipo:"tamarindo", imagen:"images/productos/sabroricos-40.jpg",seleccion:""}
	];
	
	$scope.dulcesSeleccionados=[];

	$(document).ready(function(){
    $(".box-img").click(function(){
        alert("a");
    });
	});

	$scope.agregardulce=function (dulce, control) {
		if (dulce.control) {
			var index = $scope.dulcesSeleccionados.indexOf(control)
  			$scope.dulcesSeleccionados.splice(dulce, 1);
			$scope.dulces[control].control=false;
		}else{
			$scope.dulcesSeleccionados.push(dulce);
			$scope.dulces[control].control=true;
		}
	}
});


