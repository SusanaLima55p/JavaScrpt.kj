/*
let res = document.getElementById('res')

function nomedafuncao(soma){
    return ++soma
}

console.log(nomedafuncao(69))
*/
let pessoa = {
    nome: 'Susana',
    idade: 20,
    profissao: 'vendedora',
    cidade: 'Campo Bom'
}

function novapessoa(novoObjetoPessoa){
    if(typeof novoObjetoPessoa == 'object'){
    pessoa = novoObjetoPessoa
    return true
    } else {
        return false
    }

}