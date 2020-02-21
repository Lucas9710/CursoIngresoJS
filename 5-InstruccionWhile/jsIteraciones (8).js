function mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	do{
	var	numero = parseInt(prompt("inggrese un numero: "));

		while(isNaN(numero)){
			numero = parseInt(prompt("esto no es un numero. ingrese un numero: "));
			
		}
		//me fijo ell signo del numero

		if(numero>=0){
			//aca hago lo que tengo que hacer con los positivos

			positivo = positivo + numero;
		}
		else{
			//aca hago lo que tengo que hacer con los negativos
			
			negativo = negativo * numero;
			flag = 1;
		}

		respuesta = prompt("quiere ingresar otro numero?");

	}while(respuesta =="si");

	if(flag == 0){
		negativo = 0;
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN