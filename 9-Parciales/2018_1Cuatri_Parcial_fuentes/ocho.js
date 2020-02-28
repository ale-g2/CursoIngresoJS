function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var respuesta;
	do
	{
	nombre=prompt("Ingrese su nombre");
	while(!isNaN(nombre))

	edad=parseInt(edad);
	edad=prompt("Ingrese su nombre");
	while(isNaN(edad))

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
}
