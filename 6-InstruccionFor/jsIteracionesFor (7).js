

function mostrar()
{
    var numero;
    var contador = 0;

    numero = parseInt(prompt("ingrese un numero: "));

    while(isNaN(numero)){
        numero= parseInt(prompt("esto no es un numero, ingrese un numero: "));

    }

    for(var i = 1; i<= numero; i++){
        if(numero % i == 0){
            console.log(i);
            contador++;
        }

    }
   console.log("numero divisibles encontrados " + contador); 
}


//FIN DE LA FUNCIÓN