function mostrar()
{
var numeroingresado;
var numeroAnterior;
var flag;
flag=0
numeroingresado=prompt("ingrese numero");

	for(numeroAnterior=2;numeroAnterior<numeroingresado;numeroAnterior++)
	{
		if(numeroingresado%numeroAnterior==0)
		{
			flag=1;
			break;
		}
	}	

if(flag!="Si paso")
{
	alert("Es primo el"+numeroingresado)
}
}//FIN DE LA FUNCIÓN