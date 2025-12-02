let contador=0, qtdMensagens=0, msgOriginal="";

function fnMensagem(){
    contador = 0
    document.getElementById("msgRepetida").value = ""
    qtdMensagens = document.getElementById("qtdMensagens").value
    msgOriginal = document.getElementById("msgOriginal").value
    if(qtdMensagens == 0 || msgOriginal == ""){
        document.getElementById("msgRepetida").value = "A mensagem não será repetida."
    }
    while(contador < qtdMensagens){
        document.getElementById("msgRepetida").value += msgOriginal + " "
        contador++
    }
}