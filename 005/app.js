function fnRelogio(){
    let data = new Date(), horas = data.getHours().toString().padStart(2, "0"), minutos = data.getMinutes().toString().padStart(2, "0"), msgHora = document.getElementById("msgHora")

    document.getElementById("horaAtual").innerText = `${horas}:${minutos}`
    if(horas >= 6 && horas < 12){
        msgHora.innerText = "Bom dia!"
    }
    else if(horas >= 12 && horas < 18){
        msgHora.innerText = "Boa tarde!"
    }
    else if(horas >= 18 && horas > 0){
        msgHora.innerText = "Boa noite!"
    }
    else{
        msgHora.innerText = "Boa madrugada!"
    }

    if(horas >= 6 && horas < 18){
        document.body.classList.remove("modo-noturno")
    }
    else{
        document.body.classList.add("modo-noturno")
    }
}

setInterval(fnRelogio, 1000)