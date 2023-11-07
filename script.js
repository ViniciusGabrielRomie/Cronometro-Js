window.onload = function(){
    var segundos = 0;
    var milissegundos = 0;
    var acressentarSegundos = document.getElementById("Segundos");
    var acressentarMilissegundos = document.getElementById("Milissegundos");
    var botaoStart = document.getElementById('Start');
    var botaoStop = document.getElementById('Stop');
    var botaoReset = document.getElementById('Reset');
    var Interval;

        botaoStart.onclick = function() {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        }

      botaoStop.onclick = function(){
        clearInterval(Interval);
      }

      botaoReset.onclick = function(){
        clearInterval(Interval);
        segundos = "00";
        milissegundos = "00";
        acressentarSegundos.innerHTML = segundos;
        acressentarMilissegundos.innerHTML = milissegundos;
      }

    function startTimer() {
      milissegundos++;

      if(milissegundos <= 9){
        acressentarMilissegundos.innerHTML = "0" + milissegundos;
      }
      if (milissegundos > 9){
        acressentarMilissegundos.innerHTML = milissegundos;
      }
      
      if (milissegundos>99){
        segundos++;
        milissegundos = 0;
        acressentarSegundos.innerHTML = "0" + segundos;
        milissegundos = 0;
        acressentarMilissegundos.innerHTML = "0" + milissegundos;
      }

      if (segundos > 9){
        acressentarSegundos.innerHTML = segundos;
      }
    }
}
