function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	while(contador<7)
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese el numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;

	}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN