/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //pido memoria para guardar el nombre y la edad, cargo los datos 
    //en las variables
   var nombre = document.getElementById("elNombre").value;
   var edad = document.getElementById("laEdad").value;

   //lo muestro por pantalla
   alert("usted se llama " + nombre + " y tiene " + edad + " años");

}

