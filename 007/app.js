function fnDiasSemana(){
    let dataGeral = new Date(),
        diaSemana = dataGeral.getDay(),
        diasExtenso = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
        mensagemDiaExtenso = document.getElementById("diaSemana")

    mensagemDiaExtenso.innerText = `Hoje é ${diasExtenso[diaSemana]}!`
}

setInterval(fnDiasSemana, 1000)