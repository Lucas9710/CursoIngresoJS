function mostrar()
{
  var altura;
  var sexo;
  var flag = 0;
  var alturaBaja;
  var sexoBajo;
  var cantF=0;
  var acumuladorAltura = 0;
  var promedio;

  for(var i = 0 ; i < 5; i++){

    altura = parseInt(prompt("ingrese la aultra en centimetros"));
    while(altura < 0 || altura > 250 || isNaN(altura)){
        altura = parseInt(prompt("ingrese la aultra en centimetros"));
   
    }

    console.log(altura);
    sexo = prompt("ingrese el sexo");
    while(sexo != "f" && sexo != "m"){
        sexo = prompt("ingrese el sexo");
    }

    if(flag==0 || alturaBaja > altura){
        alturaBaja = altura;
        sexoBajo = sexo;
        flag = 1;
    }

    if( altura > 190 && sexo =="f"){
        cantF++;
        
    }

    acumuladorAltura += altura;
  }

  promedio = acumuladorAltura / 5;
  console.log(promedio);
  console.log(acumuladorAltura);

  alert("el promedio de las alturas totales " + promedio);
  alert("la altura mas baja " + alturaBaja + " y el sexo de esa persona " + sexoBajo);
  alert("la cantidad de mujeres que su altura supere los 190 cm " + cantF);
}
