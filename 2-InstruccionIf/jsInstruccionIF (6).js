function mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);

 if(edad >= 18 ){
    alert("es mayor");
}else if(edad >= 13 || edad <= 17 ){
        alert("es adolecente");
       }else{
           alert("es menor a 13 años");
       }
}