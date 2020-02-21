function mostrar()
{

	var contador=0;
	var acumulador=0;
	var nuumeroIngresado=0;
	while(contador<5)
	{
		contador=contador+1;
		nuumeroIngresado=prompt("ingrese el numero");
		nuumeroIngresado=parseInt(nuumeroIngresado);
		acumulador=acumulador+nuumeroIngresado;

	}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN