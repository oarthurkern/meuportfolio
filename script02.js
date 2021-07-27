function concluir () {
    var quantidade = document.getElementsByName('radcarvao')
    var escolheu = ''
    var res = document.getElementById('res')
    if (quantidade[0].checked) {
        escolheu = '8kg'
    } else if (quantidade[1].checked) {
        escolheu = '5kg'        
    } else if (quantidade[2].checked) {
        escolheu = '4kg'
    } else if (quantidade[3].checked) {
        escolheu = '3kg'
    }
        var quantos = document.getElementById('quantidade')
        var resultado = Number(quantos.value)
    if (quantos >= 0 || quantos <= 10 ) {
        resultado = Number(quantos.value)
    }
    res.innerHTML = `Você escolheu ${resultado} unidades de carvão ${escolheu}.`   
    if (resultado == 0) {
            alert('[ERRO] PEDIDO INVALIDO, VERIFIQUE E TENTE NOVAMENTE!')
            res.innerHTML = `Preencha os campos acima.`
    }
}