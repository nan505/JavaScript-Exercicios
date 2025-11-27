let resultado = 0,
    textoResultado = document.getElementById("resultado")

function fnSomar(){
    let primeiroNumero = document.getElementById("primeiroNumero").value,
        segundoNumero = document.getElementById("segundoNumero").value

    resultado = Number(primeiroNumero) + Number(segundoNumero)
    textoResultado.innerText = `O resultado da soma é igual a ${resultado}`
}

function fnSubtrair(){
    let primeiroNumero = document.getElementById("primeiroNumero").value,
        segundoNumero = document.getElementById("segundoNumero").value

    resultado = Number(primeiroNumero) - Number(segundoNumero)
    textoResultado.innerText = `O resultado da subtração é igual a ${resultado}`
}

function fnMultiplicar(){
    let primeiroNumero = document.getElementById("primeiroNumero").value,
        segundoNumero = document.getElementById("segundoNumero").value

    resultado = Number(primeiroNumero) * Number(segundoNumero)
    textoResultado.innerText = `O resultado da multiplicação é igual a ${resultado}`
}

function fnDividir(){
    let primeiroNumero = document.getElementById("primeiroNumero").value,
        segundoNumero = document.getElementById("segundoNumero").value

    resultado = Number(primeiroNumero) / Number(segundoNumero)
    textoResultado.innerText = `O resultado da divisão é igual a ${resultado}`
}