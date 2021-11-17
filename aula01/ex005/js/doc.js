// vai retornar todos os elementos da clase teste dentro de um conjunto como se fosse uma array.
console.log(
    document.querySelectorAll('.teste')
)
// vai retornar todos os elementos da classe filho, porém só os que estão dentro do elemento que tem id pai.
console.log(
    document.getElementById('pai').querySelectorAll('.filho')
)
// vai retornar somente o elemento da classe filho com indice 2 que está dentro do elemento com id paizao
console.log(
    document.getElementById('paizao').querySelectorAll('.filho')[2].innerHTML
)
// vai retornar todos os elementos que estão dentro da tag mencionada, podemos especificar com indice também
console.log(
    document.querySelectorAll('p')
)