var dulces=angular.module('dulces',['ngRoute']);

dulces.controller('main', function($scope){
	
	$scope.control=1;
	$scope.sp=" ";
	$scope.dulces=[
		{nombreDulce:"Dulce picosito 1", control:false, tipo:"picosito", imagen:"assets/img/portfolio/sabroricos-20.jpg",seleccion:""},
		{nombreDulce:"Dulce picosito 2", control:false, tipo:"picosito", imagen:"assets/img/portfolio/sabroricos-24.jpg",seleccion:""},
		{nombreDulce:"Dulce salado 2", control:false, tipo:"salado", imagen:"assets/img/portfolio/sabroricos-26.jpg",seleccion:""},
		{nombreDulce:"Dulce salado 3", control:false, tipo:"salado", imagen:"assets/img/portfolio/sabroricos-33.jpg",seleccion:""},
		{nombreDulce:"Dulce tamarindo 2", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-35.jpg",seleccion:""},
		{nombreDulce:"Dulce tamarindo 3", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""}
	];
	$scope.dulcesSeleccionados=[];

	$scope.agregardulce=function (dulce, control) {
		if (dulce.control) {
			var index = $scope.dulcesSeleccionados.indexOf(control)
  			$scope.dulcesSeleccionados.splice(index, 1);
			$scope.dulces[control].control=false;
			$scope.dulces[control].seleccion="";
		}else{
			$scope.dulcesSeleccionados.push(dulce);
			$scope.dulces[control].control=true;
			$scope.dulces[control].seleccion="Seleccionada";
			
		}
	}
});

	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

 app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/header.html',
				controller  : 'main'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/header.html',
				controller  : 'main'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'views/header.html',
				controller  : 'main'
			});
	});

// var fun=function (e) {
// 	var objetc=[];
// 	var $this=$(this);
// 	var name=$this.attr("data-name");
// 	objetc.push({name:name});
// 	console.log(objetc);
// }
// $(document).on("click","#objeto", fun);

// var Comp=function  () {

// 	return {
// 		add:function  (e) {
			
// 		}
// 	}
// }

$(document).ready(function(){
    $(".image").click(function(){
        $(this).toggleClass('red');
        $(".box-select").toggleClass("seleccion");
    });
});