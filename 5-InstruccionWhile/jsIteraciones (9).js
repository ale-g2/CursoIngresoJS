function mostrar()
{

	//var contador=0;
	var flag = true;
	var numero;
	var maximo;
	var minimo;
	
	var respuesta=true;

	while(respuesta==true)
	{
	numero=prompt("Ingrese los numeros que usted desee");
	numero=parseInt(numero);

		if(flag== true || numero>maximo)
		{
	 		maximo=numero;	
		}
			if(flag== true || numero<minimo)
			{
				minimo=numero;
			}
	
	flag = false;
	respuesta=confirm("¿Desea usted ingresar más numeros?");
	}

 	document.getElementsById('maximo').value=maximo;
 	document.getElementsById('minimo').value=minimo;
}//FIN DE LA FUNCIÓNEnunciado:

