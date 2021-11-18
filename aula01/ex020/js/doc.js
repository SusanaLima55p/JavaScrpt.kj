let text = document.getElementById('search')
let res = document.getElementById('res')
let reserro = 'Nenhum resultado'

text.addEventListener('keyup', function(){
    let valor = this.value
    if (valor !== ''){
        res.innerText = valor
    } else {
        res.innerText = reserro
    }
})