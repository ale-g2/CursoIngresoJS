function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
 switch(mesDelAño)  
 {
 	case "Enero":
 	case "Marzo":
 	case "Abril":
 	case "Mayo":
 	case "Junio":
 	case "Julio":  
 	case "Agosto":
 	case "Septiembre":
 	case "Octubre":
 	case "Noviembre":
 	case "Diciembre":
 	mensaje="Este mes no tiene más de 29 dias";
 		break;
 	case "Febrero":
 	mensaje="Este mes tiene 30 dias o mas";
 		default: alert("pruebas"); break; 


 }
alert (mensaje);
	
	


}//FIN DE LA FUNCIÓN