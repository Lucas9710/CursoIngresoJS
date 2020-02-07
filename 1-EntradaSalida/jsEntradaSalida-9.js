/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{   
    //guardo informacion en las variables
    var sueldo = parseInt(document.getElementById("sueldo").value);
    
    //saco porcentajes y le sumo al sueldo
    var aumento = sueldo * 10 / 100;
    var sueldoFinal = sueldo + aumento;

    //agrego el resultado
    document.getElementById("resultado").value = sueldoFinal;
    
}
