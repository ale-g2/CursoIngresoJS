function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor(Math.random() * 10);
	if(numero>8)
	{
		alert("EXCELENTE");
	}else
		{
			if(numero>4)
			{
				alert("APROBO");
			}else
				{
					alert("Vamos,La proxima se puede");
				}
		}
console.log(numero);
}//FIN DE LA FUNCIÓN