window.onaload = function(){
    var segundos = 00;
    var milissegundos = 00;
    var acressentarSegundos = document.getElementById('segundos');
    var acressentarMilissegundos = document.getElementById('Milissegundos');
    var botaoStart = document.getElementById('Start');
    var botaoStop = document.getElementById('Stop');
    var botaoReset = document.getElementById('Reset');
    var intervalo;

        botaoStart.onclick = function() {
            clearInterval(intervalo);
            intervalo = setInterval(startTimer, 10);
        }
}