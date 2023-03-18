let btnStart = document.getElementById("start") //Variável do botão Start do HTML
let mili = document.getElementById("mili") //Variavel dos milissegundos do HTML
let seconds = document.getElementById("seconds") //Variavel dos segundos do HTML
let minutes = document.getElementById("minutes") //Variavel dos minutos do HTML
let hours = document.getElementById("hours") //Variavel das horas do HTML
let btnStop = document.getElementById("stop")
let btnReset = document.getElementById ("reset")

let startTimer //variavel para armazenar os tempos  
let ms = 0  //variavel para guardar os milissegundos no JS
let seg = "00" //segundos
let min = "00" //minutos
let hr = "00" //horas 

function start(){
  startTimer = setInterval (function () { 
    ms ++

    if (ms === 100){
        seg++

        if (seg<10){
            seg = "0" + seg
        }

        ms = 0
    }

    if (seg === 60){
        min++

        if (min<10){
            min = "0" + min
        }

       seg = 0
    }

    if (min === 60){
        hr++

        if (hr<10){
            hr = "0" + hr
        }

        min = 0
    }

    btnStart.classList.add("ativo")
    btnStop.classList.remove("ativo")
    btnReset.classList.remove("ativo")
    atualizaValor()
  }, 10);
  //esse 1000 é em milissegundos, ou seja, se repete a cada segundo
}

function atualizaValor(){
    mili.innerHTML = ms
    seconds.innerHTML = seg
    minutes.innerHTML = min
    hours.innerHTML = hr
}

function stop() {
    clearInterval(startTimer)
    btnStop.classList.add("ativo")
    btnStart.classList.remove("ativo")
    btnReset.classList.remove("ativo")
}

function reset() {
    clearInterval(startTimer)
    ms = "00"
    seg = "00"
    min = "00"
    hr = "00"
    atualizaValor()
    
    btnReset.classList.add("ativo")
    btnStart.classList.remove("ativo")
    btnStop.classList.remove("ativo")
}

btnStart.addEventListener("click", start)
btnStop.addEventListener("click", stop)
btnReset.addEventListener("click", reset)