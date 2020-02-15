function mostrar()
{
    var edad = document.getElementById("edad").value;

    if(!edad >= 13 || !edad <= 17 ){
        alert("no es adolecente");
    }

}//FIN DE LA FUNCIÓN