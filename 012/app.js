let contador = 0, timer = "", contagemChegouEm10 = false

function fnContador(){
    timer = setInterval(function fnContando(){
            if(contador >= 0 && contador < 10 && contagemChegouEm10 == false){
                document.getElementById("contador").innerText = contador
                contador++
            }
            else if(contador == 10 && contagemChegouEm10 == false){
                contagemChegouEm10 = true
                document.getElementById("contador").innerText = contador
                contador--
            }
            else if(contador > 0 && contagemChegouEm10 == true){
// Para que o contador não se repita infinitamente:
// (contador >= 0 && contagemChegouEm10 == true)
                document.getElementById("contador").innerText = contador
                contador--
            }
            else{
                contagemChegouEm10 = false
                document.getElementById("contador").innerText = contador
                contador++
            }
    }, 1000)
}

// Para que a função inicie automaticamente:
// setTimeout(fnContador, 1000)