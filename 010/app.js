let somaTotal = 0, totalNumeros = 0, numeroAtual = 0, realizarMedia = false, mediaRealizada = 0, numerosInseridos = null, novaMedia = false, inseriuNumero = false

function fnMedia(){
    numeroAtual = document.getElementById("numeroMedia").value
    if(numeroAtual == ""){
        inseriuNumero = false
        alert("Insira um número!")
    }
    else{
        inseriuNumero = true
    }
    if(inseriuNumero == true){
        totalNumeros = Number(totalNumeros) + 1
        somaTotal = Number(somaTotal) + Number(numeroAtual)
        numerosInseridos = document.getElementById("numeroMedia").value
        document.getElementById("numerosInseridos").innerHTML += `${numerosInseridos} `
        numerosInseridos = null
        if(confirm("Deseja adicionar mais um número?")){
            document.getElementById("numeroMedia").value = null
            document.getElementById("msgMedia").innerText = ""
        }
        else{
            realizarMedia = true
            document.getElementById("msgMedia").innerText = ""
        }
        if(realizarMedia == true){
            mediaRealizada = Number(somaTotal) / Number(totalNumeros)
            document.getElementById("msgMedia").innerText = "A média dos números informados é " + mediaRealizada
            document.getElementById("numeroMedia").value = null
            somaTotal = 0
            totalNumeros = 0
            numeroAtual = 0
            realizarMedia = false
            mediaRealizada = 0
            document.getElementById("numerosInseridos").innerText = ""
        }
    }
}

function fnReset(){
    if(confirm("Deseja limpar todos os valores adicionados?")){
        somaTotal = 0
        totalNumeros = 0
        numeroAtual = 0
        realizarMedia = false
        mediaRealizada = 0
        document.getElementById("numeroMedia").value = null
        document.getElementById("numerosInseridos").innerText = ""
        document.getElementById("msgMedia").innerText = ""
    }
    else{
        console.log("Nada aconteceu!")
    }
}