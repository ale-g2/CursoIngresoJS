function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
alert (mesDelAño);
switch(mesDelAño)
{
 	case "Abril": 
 	case "Junio":
 	case "Noviembre": 
    mensaje="tiene 30 dias";
   		 break;
	case "Enero":
	case "Marzo": 
	case "Mayo": 
	case "Julio":   
	case "Agosto": 
	case "Octubre": 
	case "Diciembre": 
	mensaje="si tiene 31 dias";
		break;
	case "Febrero": 
	mensaje="tiene 29 dias";
	 default break;

}



	


}//FIN DE LA FUNCIÓN