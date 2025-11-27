function fnCalculo(){
    let vendasJan = 0, vendasFev = 0, vendasMar = 0, mediaVendas = 0
    vendasJan = document.getElementById("vendasJan").value
    vendasFev = document.getElementById("vendasFev").value
    vendasMar = document.getElementById("vendasMar").value

    // Utilizando o "Number" para que o JavaScript reconheça as variáveis como números
    
    mediaVendas = (Number(vendasJan) + Number(vendasFev) + Number(vendasMar)) / 3

    document.getElementById("mediaTri").innerText = `A média dos valores de vendas do primeiro trimestre de 2018 é de R$${mediaVendas}`
}