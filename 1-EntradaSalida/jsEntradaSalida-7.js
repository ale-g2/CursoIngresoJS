/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var suma;
    var resta;
    var multiplicar;
    var dividir;
numero1=document.getElementById('numeroUno').value;
 numero2=document.getElementById('numeroDos').value;
 numero1=parseInt(numero1);
 numero2=parseInt(numero2);
 suma=numero1+numero2;
 alert(suma);
}
function restar()
{
    numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;  
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    resta=numero1-numero2;
    alert(resta);

}
function multiplicar()
{ 
	numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    multiplicar=numero1*numero2;
    alert(multiplicar);
}
function dividir()
{
	numero1=document.getElementById('numeroUno').value;
    numero=document.getElementById('numeroDos').value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    dividir=numero1/numero2;
    alert(dividir);
}

