function mostrar()
{
    var numero;
    var contadorPares = 0;

    numero = parseInt(prompt("ingrese un numero: "));

    while(isNaN(numero)){
        numero= parseInt(prompt("esto no es un numero, ingrese un numero: "));

    }

    for(var i = 1; i<= numero; i++){
        if(i % 2 == 0){
            console.log(i);
            contadorPares++;
        }

    }
   console.log("pares encontrados " + contadorPares); 

}//FIN DE LA FUNCIÓN