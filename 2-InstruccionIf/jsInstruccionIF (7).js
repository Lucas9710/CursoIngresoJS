function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);
var estadoCivil = document.getElementById("estadoCivil").value;

if(estadoCivil == "Soltero" && edad < 18){
    alert("es muy joven para no estar soltero");
}	


}//FIN DE LA FUNCIÓN