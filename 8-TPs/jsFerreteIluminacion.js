/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	
	var numerobreo;
 	var precio;
 	var marca;
 	var descuento;
 	var cantidad;
 	var IngresosBrutos;
 	marca=document.getElementById('Marca').value;
 	cantidad=document.getElementById('Cantidad').value;

 	cantidad=parseInt(cantidad);
 	precio = 35;
 	if(cantidad>5)
 	{
 		descuento=precio-(precio*50/100);
 	}
 	else
 	{
 		if(cantidad==5)
 		{
 				if(marca=="ArgentinaLuz")
 				{
 					descuento=precio-(precio*40/100);
 				}
 				else
 				{
 					descuento=precio-(precio*30/100);
 				}
 		}
 		else
 		{
 			if(cantidad==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 			{
 				marca=precio-(precio*25/100);
 				if(marca!="ArgentinaLuz" && marca!="FelipeLamparas")
 				{
 					descuento=precio-(precio*20/100);
 				}
 				else
 				{
 					if(cantidad==3)
 					{
 						if(marca=="ArgentinaLuz")
 						{
 							descuento=precio-(precio*15/100);
 						}
 						if(marca=="FelipeLamparas")
 						{
 							descuento=precio-(precio*10/100);
 						}
 						else
 						{
 							descuento=precio-(precio*5/100);
 						}

 					}
 				}

 			}	
 		}
 	}
 if(descuento>120)
 {
 	IngresosBrutos=descuento+(descuento*10/100);
 	numerobreo=descuento*10/100;
 	alert("Usted pago" +IngresosBrutos+ "de IIBB siendo"+numerobreo+"el impuesto que se pagó");
 }
	document.getElementById('precioDescuento').value=descuento;
}

