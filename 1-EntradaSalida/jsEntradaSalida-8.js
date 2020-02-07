/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //guardo en variables los datos ingresados  
    var numero1 = document.getElementById("numeroDividendo").value;
    var numero2 = document.getElementById("numeroDivisor").value;
  
    //parseo los datos string a int
    numero1 = parseInt(numero1, 10);
    numero2 = parseInt(numero2, 10);
  
    //hago la cuenta
    var resultado = numero1 % numero2;
  
    //lo muestro por pantalla
    alert("el resultado es: " + resultado);  
}
