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
		{nombreDulce:"Gomiricas de Naranja", control:false, tipo:"picosito", imagen:"img/productos/producto15-3.jpg",seleccion:""},
		{nombreDulce:"Gomirica de durazno", control:false, tipo:"picosito", imagen:"img/productos/producto16-3.jpg",seleccion:""},
		{nombreDulce:"Serpentina con saladillos", control:false, tipo:"salado", imagen:"img/productos/producto1-1.jpg",seleccion:""},
		{nombreDulce:"Guayaba con chile", control:false, tipo:"picosito", imagen:"img/productos/producto3-3.jpg",seleccion:""},
		{nombreDulce:"Rielito con chile", control:false, tipo:"picosito", imagen:"img/productos/producto4-2.jpg",seleccion:""},
		{nombreDulce:"Gomirica de gusano", control:false, tipo:"picosito", imagen:"img/productos/producto5-1.jpg",seleccion:""},
		{nombreDulce:"Saladito con Chile y Limón", control:false, tipo:"salado", imagen:"img/productos/producto6-1.jpg",seleccion:""},
		{nombreDulce:"Saladito con sal", control:false, tipo:"salado", imagen:"img/productos/producto7-1.jpg",seleccion:""},
		{nombreDulce:"Paleta con sal", control:false, tipo:"salado", imagen:"img/productos/producto8-1.jpg",seleccion:""},
		{nombreDulce:"Salado adobado", control:false, tipo:"salado", imagen:"img/productos/producto10-1.jpg",seleccion:""},
		{nombreDulce:"Mango con chile", control:false, tipo:"picosito", imagen:"img/productos/producto11-2.jpg",seleccion:""},
		{nombreDulce:"Piña con Chile", control:false, tipo:"picosito", imagen:"img/productos/producto12-2.jpg",seleccion:""},
		{nombreDulce:"Pulpa tochito para escarchar", control:false, tipo:"salado", imagen:"img/productos/producto13-1.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Sandia", control:false, tipo:"picosito", imagen:"img/productos/producto14-1.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Naranja", control:false, tipo:"picosito", imagen:"img/productos/producto15-4.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Durazno", control:false, tipo:"picosito", imagen:"img/productos/producto16-1.jpg",seleccion:""},
		{nombreDulce:"Salado con limón", control:false, tipo:"salado", imagen:"img/productos/producto17-1.jpg",seleccion:""},
		{nombreDulce:"Chamoy con Ciruela", control:false, tipo:"salado", imagen:"img/productos/producto18-1.jpg",seleccion:""},
		{nombreDulce:"Chamoy con Mango", control:false, tipo:"picosito", imagen:"img/productos/producto19-1.jpg",seleccion:""},
		{nombreDulce:"Tochomorocho", control:false, tipo:"picosito", imagen:"img/productos/producto20-2.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Mango", control:false, tipo:"picosito", imagen:"img/productos/producto15-1.jpg",seleccion:""}
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


