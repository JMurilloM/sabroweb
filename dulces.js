var dulces=angular.module('dulces',[]);

dulces.controller('main', function($scope){
	
	$scope.control=1;
	$scope.sp="";
	$scope.saludo="Hola";
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
			var elemento=document.getElementById(control);
			alert(elemento);
		}else{
			$scope.dulcesSeleccionados.push(dulce);
			$scope.dulces[control].control=true;
			$scope.dulces[control].seleccion="Seleccionada";
			
		}
	}
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
