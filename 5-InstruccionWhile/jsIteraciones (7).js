function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var nuumeroIngresado;
		while(respuesta=="si")
	{
		contador=contador+1;
		nuumeroIngresado=prompt("ingrese el numero");
		nuumeroIngresado=parseInt(nuumeroIngresado);
		acumulador=acumulador+nuumeroIngresado;
		respuesta=parseInt("ingrese si para continuar");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN