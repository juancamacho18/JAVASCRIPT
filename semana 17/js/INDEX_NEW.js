function openMenu(){
    document.getElementById("mainMenu").style.width="480px"; //Vista celular
    document.getElementById("mainMenu").style.display="flex"; //Vista celular
    document.getElementById("mainMenu").style.height="1000px"; //Vista celular
    document.getElementById("openmenu").style.display="none"; //Vista celular
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px"; //Cerrar vista celular
    document.getElementById("mainMenu").style.transition="0.9s all"; //Cerrar vista celular
    window.location.reload(); //Asemeja al volver a cargar pagina web - F5
}