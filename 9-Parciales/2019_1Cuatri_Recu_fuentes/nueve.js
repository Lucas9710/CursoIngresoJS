function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var nota;
    var varonesAprobados;
    var acumuladorNotasMenores=0
    var contadorNotasMenores = 0;
    var contadorNotasAdolescentes= 0;
    var contadorNotasMayores = 0;
    var acumuladorNotasMayores = 0;
    var acumuladornotasFemi = 0;
    var acumuladorNotasMasc = 0;
    var contadorMasc = 0;
    var contadorFemi = 0;
    var sexoMejorNota;
    var nombreMejorNota;
    var flag = 0;
    var notaMax;
    var promedioMenores;
    var promedioMayores;
    var promedioAdolecentes;
    var promedioFemi;
    var promedioMasc;
    

   do {

        // ------------- pido datos --------------------
        nombre = prompt("Ingrese una nombre: ");

        edad = parseInt(prompt("Ingrese una edad  "));
        while (isNaN(edad)) {
            edad = parseInt(prompt("edad invalida, ingrese una edad valida "));
        }
        sexo = prompt("Ingrese un sexo: ");
        while (!(sexo == "m" && sexo == "f")) {
            sexo = prompt("por favor ingrese un sexo valido (m - f)");

        }

        nota = parseInt(prompt("ingrese una nota"));
        while(isNaN(nota)){
            nota= parseInt(prompt("por favor ingrese una nota validad"));
        }
        // ---- analisis de los datos ----------
      
     //----------------cantidad de varones aprobados-----------
        if( sexo == "m" && nota >=6){
            varonesAprobados++
        }     

    //----------------notas menores de edad----

        if( edad < 13){
            acumuladorNotasMenores += nota;
            contadorNotasMenores++
        }else if(edad >=13 && edad <= 17){
            contadorNotasAdolescentes++
            acumuladorNotasAdolescentes+= nota;
        }else  if(edad >= 18){
            contadorNotasMayores++
            acumuladorNotasMayores+= nota;

        }     
  //----------------notas por sexo------------------
        if(sexo == "f"){
            acumuladorNotasMasc+= nota;
            contadorMasc++;
        }else{
            acumuladornotasFemi+= nota;
            contadorFemi++
        }

     //-----------------maximos y minimos----------------

       if((flag == 0 || notaMax < nota) && (edad >=13 && edad <= 17)){
           notaMax = nota;
           sexoMejorNota = sexo;
           nombreMejorNota= nombre
           flag = 1;
       }    

        seguir = prompt("Quiere continuar?:");

    } while (seguir == 's');

    if(contadorNotasMenores != 0){
        promedioMenores = acumuladorNotasMenores / contadorNotasMenores; 
    }
     if(contadorNotasMayores != 0){
        promedioMayores = acumuladorNotasMayores / contadorNotasMayores;
    }
    
    if(contadorNotasAdolescentes != 0){
         promedioAdolecentes = acumuladorNotasAdolescentes / contadorNotasAdolescentes;
    }

    
    promedioMayores = acumuladorNotasMayores / contadorNotasMayores;
    promedioFemi = acumuladornotasFemi / contadorFemi;
    promedioMasc = acumuladorNotasMasc / contadorMasc;

    document.write("a) La cantidad de varones aprobados " + varonesAprobados + "</br>");
    document.write("b) El promedio de notas de los menores de edad " + promedioMenores + "<br>");
    document.write("c) El promedio de notas de los adolescentes. " + promedioAdolecentes + "<br>");
    document.write("d) El promedio de notas de los mayores	" + promedioMayores + "<br>");
    document.write("f) El promedio de notas por sexo masculino" + promedioMasc + "y femenino" + promedioFemi + "<br>");
}
