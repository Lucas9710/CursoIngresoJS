function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch(laHora){
    case 7:
    case 8:
    case 10:
    case 11: 
        alert("es de mañana");

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
         alert("es de tarde");
    default:
         alert("es de noche");            

}
	
	



}//FIN DE LA FUNCIÓN