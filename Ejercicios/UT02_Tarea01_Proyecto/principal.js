$(document).on("ready",configurarWeb);
function configurarApp(){
    var canvas = document.getElementById("modCanvas");
    var contexto = canvas.getContext("2d");
    canvas.width = screen.availWidth;
}