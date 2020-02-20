function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
 var mensaje; 
alert (mesDelAño);

switch(mesDelAño)
{
	case "Agosto":
	case "julio":
alert ("abrigate que hace frio");
break;
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
alert ("falta poco para el invierno");
break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
alert ("Ya pasamos el frio, Ahora calor");
break;
default: alert("No es compatible"); break;
}









}//FIN DE LA FUNCIÓN