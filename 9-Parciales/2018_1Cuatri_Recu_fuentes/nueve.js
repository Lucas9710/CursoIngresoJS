function mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var seguir;
    var contadorPares = 0;
    var cantAnimalesBC = 0;
    var flag = 0;
    var pesoMax;
    var nombreMax ;
    var pesoMaxBC = 0;
    var pesoMinBC = 0;
    var promedio;
    var contador = 0;
    var acumuladorPeso = 0;
    var tempMax;
  do{
    nombre = prompt("ingrese el nombre del animal");
    peso = parseInt(prompt(" ingrese el peso del animal. debe ser entre 1 y 1000 "));
    while(peso < 1 || peso > 1000){
        peso = parseInt(prompt("peso incorrecto. ingrese el peso del animal. debe ser entre 1 y 1000 "));
    }

    temperatura= parseInt(prompt("ingrese la temperatura del hábitad (entre -30 y 30)"));
    while(temperatura < -30 || temperatura > 30){
        temperatura= parseInt(prompt("temperatura erronea. ingrese la temperatura del hábitad (entre -30 y 30)"));
    }
    //----------analisis de datos----------
    if(temperatura % 2 == 0){
        contadorPares++;
    }

    if(temperatura < 0){
        cantAnimalesBC++;
    }

    acumuladorPeso += peso;
    //-------------maximos y minimos--------------------
    if((contador == 0 || pesoMaxBC < peso) && (temperatura < 0)  ){
        pesoMaxBC = peso;
        
    }
    
    if((contador == 0 || pesoMinBC > peso) && (temperatura < 0)  ){
        pesoMinBC = peso;
        
    }
    
    if(flag== 0 || pesoMax< peso ){
        pesoMax = peso;
        tempMax = temperatura;
        nombreMax = nombre;
        flag = 1;
    }
   
    contador++;

    seguir = prompt("¿Quiere continuar?. ingrese si o cualquier tecla de lo contrario");
  }while(seguir == 'si');


  promedio = acumuladorPeso / contador;

  document.write("a) La cantidad de temperaturas pares: " + contadorPares +"</br>");
  document.write("b) El nombre del animal más pesado: " + nombreMax + " temperatura "+ tempMax + "</br>");
  document.write("c) La cantidad de animales que viven a menos de 0 grados: " + cantAnimalesBC +"</br>");
  document.write("d) El promedio del peso de todos los animales: " + promedio +"</br>");
  document.write("f) el peso maximo de todas los animales con temperaturas bajo 0: " + pesoMaxBC +"el peso minimo de todas los animales con temperaturas bajo 0:"+ pesoMinBC  +"</br>");

}
