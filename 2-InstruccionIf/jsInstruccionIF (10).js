function mostrar()
{
	var aleatorio = Math.round(Math.random()*10);;
	aleatorio =  parseInt(aleatorio);
	
	alert(aleatorio);
	
	if(aleatorio >= 9){
		alert("exelente");
	}else if(aleatorio >= 4){
		alert("aprobo");
	}else{
		alert("no aprobo");
	}

   

}//FIN DE LA FUNCIÓN