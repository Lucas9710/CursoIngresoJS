/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  //guardo en variables los datos ingresados  
  var numero1 = document.getElementById("numeroUno").value;
  var numero2 = document.getElementById("numeroDos").value;

  //parseo los datos string a int
  numero1 = parseInt(numero1, 10);
  numero2 = parseInt(numero2, 10);

  //hago la suma
  var suma = numero1 + numero2;

  //lo muestro por pantalla
  alert("el resultado es: " + suma);  


}

