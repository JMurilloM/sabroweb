var dulces=angular.module('dulces',[]);

dulces.controller('main', function($scope){
	
	$scope.control=1;
	$scope.sp="";
	$scope.saludo="Hola";
	$scope.dulces=[


		{nombreDulce:"Gomiricas de Naranja", control:false, tipo:"picosito", imagen:"assets/img/portfolio/sabroricos-20.jpg",seleccion:""},
		{nombreDulce:"Gomirica de durazno", control:false, tipo:"picosito", imagen:"assets/img/portfolio/sabroricos-24.jpg",seleccion:""},
		{nombreDulce:"Serpentina con saladillos", control:false, tipo:"salado", imagen:"assets/img/portfolio/sabroricos-26.jpg",seleccion:""},
		{nombreDulce:"Guayaba con chile", control:false, tipo:"salado", imagen:"assets/img/portfolio/sabroricos-33.jpg",seleccion:""},
		{nombreDulce:"Rielito con chile", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-35.jpg",seleccion:""},
		{nombreDulce:"Gomirica de gusano", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Saladito con Chile y Limón", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Saladito con sal", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Paleta con sal", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Salado adobado", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Mango con chile", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Piña con Chile", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Pulpa tochito para escarchar", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Sandia", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Naranja", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Durazno", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Salado con limón", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Chamoy con Ciruela", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Chamoy con Mango", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Tochomorocho", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""},
		{nombreDulce:"Gomirica de Mango", control:false, tipo:"tamarindo", imagen:"assets/img/portfolio/sabroricos-40.jpg",seleccion:""}
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
