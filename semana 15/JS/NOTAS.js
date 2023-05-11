function limpiar(){
    document.getElementById("Nota1").value="";//Borrar todo en cuadro texto nota1
    document.getElementById("Nota2").value="";//Borrar todo en cuadro texto nota1
    document.getElementById("Nota3").value="";//Borrar todo en cuadro texto nota1
    document.getElementById("Definitiva").value="";//Borrar todo en cuadro texto nota1
}
function promedio(){
    var n1=document.getElementById("Nota1").value;//Asigna notas ingresadas x teclado
    var n2=document.getElementById("Nota2").value;//Asigna notas ingresadas x teclado
    var n3=document.getElementById("Nota3").value;//Asigna notas ingresadas x teclado
    //Calcular definitiva
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;//Fx promedio
    //COLOCAR NOTA DEFINITIVA EN FORMULARIO
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}