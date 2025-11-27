function fnHorasSemanais(){
    let cargaHoraria = document.getElementById("cargaHoraria").value,
    horasTrabalhadas = document.getElementById("horasTrabalhadas").value,
    horasExtras = 0,
    textoResultado = document.getElementById("resultado")

    horasExtras = Number(cargaHoraria) - Number(horasTrabalhadas)

    if(horasExtras == 0){
        textoResultado.innerText = `Você não possui horas extras trabalhadas nessa semana!`
    }
    else if(horasExtras < 0 && horasExtras == -1){
        textoResultado.innerText = `Você trabalhou um total de ${Math.abs(horasExtras)} hora extra nessa semana!`
    }
    else if(horasExtras < 0){
        textoResultado.innerText = `Você trabalhou um total de ${Math.abs(horasExtras)} horas extras nessa semana!`
    }
    else if(horasExtras > 0 && horasExtras == 1){
        textoResultado.innerText = `Você está devendo um total de ${Math.abs(horasExtras)} hora extra nessa semana!`
    }
    else{
        textoResultado.innerText = `Você está devendo um total de ${Math.abs(horasExtras)} horas extras nessa semana!`
    }
}