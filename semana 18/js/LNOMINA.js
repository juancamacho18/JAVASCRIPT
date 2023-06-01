let smlv=parseFloat(prompt("INGRESE SALARIO MINIMO LV 2023"));
let subtte=parseFloat(prompt("INGRESE SUBSIDIO TRANSPORTE LV 2023"));
function liquidar(){
    //SUELDO BASICO
    let n1=document.getElementById("salario").value; //Bajar info salario del formulario
    let n2=document.getElementById("dias").value; //Bajar info dias lab. del formulario
    Sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=Sueldo.toFixed(0); //Subir info basico al formulario
    //SUBSIDIO TRANSPORTE
    if (n1>=2*smlv){
        subsidiot=0; //no se le otorga
        document.getElementById("subsidio").value=subsidiot.toFixed(2);
    }else{
        subsidiot=subtte/30*parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }
    //RECARGO NOCTURNO
    var nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35; //Valor recargo nocturno $$
    document.getElementById("totrecn").value=vhrn.toFixed(0);
    //TOTAL DEVENGADO
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
    //
    let totaldevo=document.getElementById("totaldev").value;
    //SECCION DE LIQUIDACION DE DEDUCCIONES
    //EPS Y PENSION
    let eps00=(totaldevo-subsidiot)*0.04; //EPS empleado
    let pens00=(totaldevo-subsidiot)*0.04; //Pension empleado
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pens00.toFixed(0);
    //FONDO DE SOLARIDAD
    let fondo=0;
    if (n1>=4*smlv){
        let fondo=totaldevo*0.01; //Calcular fondo solaridad
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    //PRESTAMO
    let presta=document.getElementById("prestam").value;
    //TOTAL DEDUCCIONES
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
    //
    let totalddc=document.getElementById("totaldedu").value
    //CALCULAR NETO A PAGAR AL EMPLEADO
    let vneto=totaldevo-totalddc; //Valor neto a pagar
    document.getElementById("neto").value=vneto.toFixed(0);
}