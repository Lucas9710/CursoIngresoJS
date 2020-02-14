function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
 
 switch(mesDelAño){
     case "Febrero":
        alert("el mes tiene 28 dias");
        break;
     case "Enero":
     case "Marzo":
     case "Mayo":
     case "Julio":
     case "Agosto":
     case "Octubre":
     case "diciembre":
        alert("el mes tiene 31 dias");
        break;
     default: 
        alert("el mes tiene 30 dias");    

        
 }
	



}//FIN DE LA FUNCIÓN