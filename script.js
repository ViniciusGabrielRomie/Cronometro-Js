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

      botaoStop.onclick = function(){
        clearInterval(intervalo);
      }

      botaoReset.onclick = fuction(){
        clearInterval(intervalo);
        segundos = 00;
        milissegundos = 00;
        acressentarSegundos.innerHtml = segundos;
        acressentarMilissegundos.innerHtml = milissegundos;
      }

    fucction startTimer(){
      milissegundos++;
      if (milissegundos <= 9){
        acressentarMilissegundos.innerHtml = "0" + milissegundos;
      }
      if (milissegundos >9){
        acressentarMilissegundos.innerHtml = milissegundos;
      }
      
      if (milissegundos>99){
        segundos++;
        milissegundos = 00;
        acressentarSegundos.innerHtml = "0" + segundos;
        milissegundos = 0;
        acressentarMilissegundos.innerHtml = "0" + milissegundos;
      }
    }
}
