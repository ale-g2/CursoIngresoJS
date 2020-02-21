function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var nuumeroIngresado;
	var respuesta='si';
	while(respuesta=="si")
	{
		contador=contador+1;
		nuumeroIngresado=prompt("ingrese el numero");
		nuumeroIngresado=parseInt(nuumeroIngresado);
		if (nuumeroIngresado>0)
		{
			positivo=nuumeroIngresado+positivo;
		}
		else
		{
			negativo=nuumeroIngresado*negativo;
		}
		respuesta=prompt("¿Quiere continuar? si/no");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN