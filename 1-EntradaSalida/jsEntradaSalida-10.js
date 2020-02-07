/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	 //guardo informacion en las variables
     var sueldo = parseInt(document.getElementById("sueldo").value);
    
     //saco porcentajes y le sumo al sueldo
     var aumento = sueldo * 25 / 100;
     var sueldoFinal = sueldo + aumento;
 
     //agrego el resultado
     document.getElementById("resultado").value = sueldoFinal;
}
