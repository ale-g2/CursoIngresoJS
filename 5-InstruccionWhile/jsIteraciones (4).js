function mostrar()
{

	var numero; 
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(numero<0||numero>10)
	
	{
		numero = prompt("Re, ingrese un número entre 0 y 10.");
		numero = parseInt(numero);
	}
document.getElementsById('Numero').value;

}//FIN DE LA FUNCIÓN