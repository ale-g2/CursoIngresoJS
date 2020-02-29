function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var respuesta;
	var promedio;
	var temperaturadelmasviejo;
	var temperaturadelmasjoven;
	var total;
	var mujeres;
	var hombres;	
	do
	{
		nombre=prompt("Ingrese su nombre");
		while(!isNaN(nombre))

		edad=parseInt(edad);
		edad=prompt("Ingrese su Edad");
		while(isNaN(edad))
		if(edad>59)
		{
			alert("Tercera Edad");
		}
		if(edad>12)
		{
			alert("Es niño");
		}
		sexo=prompt("Ingrese su sexo");
		while(sexo!="F" && sexo!="M")

		
		temperatura=prompt(temperatura);
		temperatura=parseInt(temperatura);
		while(!isNaN(temperatura)&&temperatura<40 && temperatura>20)
		{
			temperatura=prompt(temperatura);
			temperatura=parseInt(temperatura);
		}
		respuesta=prompt("¿Desea continuar?Si/No");
	}
	while(respuesta=="si");
Document.write(<cs>)
}
