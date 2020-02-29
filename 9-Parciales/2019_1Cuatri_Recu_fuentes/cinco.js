function mostrar()
{
var nombre;
var cantidadPersonas;
var dias;
var respuesta;
var contador=0;
var formadepago;
var acumulador;
 while(respuesta=="si")
 {

	nombre=prompt("Ingrese su nombre");
 	while(isNaN(nombre))

 	cantidadPersonas=prompt("Ingrese cuantas personas se van a quedar");
 	cantidadPersonas=parseInt(cantidadPersonas);
 	while(isNaN(cantidadPersonas))
 		


 	dias=prompt("Ingrese cuantos dias se va a quedar");
 	dias=parseInt(dias);
 	while(!isNaN(dias))
 		if (contador=0)
 		{
 			contador++;
 			contador=contador+dias;
 		}
 		
 }
 
 respuesta=confirm("Desea seguir cargando datos");
document.write(<Sc>);
}

 la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de //pago (efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
