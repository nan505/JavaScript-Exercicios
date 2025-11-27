    // Criar variáveis
    // Pegar o conteúdo digitado nos campos
    // Mostrar com uma mensagem amigável as informações
    // Limpar os campos

function fnCadastrar(){
    let nomeCadastro = "", idadeCadastro = 0

    // Pegar o conteúdo digitado nos campos
    nomeCadastro = document.getElementById("nome").value
    idadeCadastro = document.getElementById("idade").value

    // Mostrar as informações de maneira amigável
    document.getElementById("resultado").innerText = `Olá, seu nome é ${nomeCadastro} e você tem ${idadeCadastro} anos!`

    // Limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
}