function mostrar()
{

	var contador=0;
	// declarar variables
	var flag = 0;
	var numero;
	var maximo;
	var respuesta='si';

	do{
		numero = parseInt(prompt("ingrese un numero: "));
		while(isNaN(numero)){
			numero = parseInt(prompt("eso no es un numero. ingrese un numero: "));
		}

		if(flag == 0 || numero > maximo){
			maximo = numero;
		}

		if(flag == 0 || numero < maximo){
			maximo = numero;
			flag = 1;
		}
		respuesta = prompt("Quiere ingresar otro numero?");
	}while(respuesta =='si');
	

	document.getElementById("maximo").value = maximo;
	documento.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN