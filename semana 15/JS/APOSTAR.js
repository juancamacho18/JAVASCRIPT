function apostar(){
    //Calcular el numero aleatorio del 1 al 10
    var a=Math.round(Math.random()*10);//Aleatorio del 1 al 10
    document.getElementById("Resultado").value=a;
    var b=document.getElementById("Apostado").value;
    //Validar si acerto numero
    if (a==b){
        document.getElementById("Salida").value="GANÓ APUESTA";
    }else{
        document.getElementById("Salida").value="PEDIO APUESTA";
    }
}
//LIMPIAR
function apostar(){
    //calcular el numero aleatorio del 1 alñ 10
    var a=Math.round(Math.random()*10);//aleatorio del 1 al 10
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;
    //validar si acertó numero
    if (a==b){
        document.getElementById("salida").value="GANÓ APUESTA";
    }else{
        document.getElementById("salida").value="PERDIÓ APUESTA";
    }
}
//LIMPIAR
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}