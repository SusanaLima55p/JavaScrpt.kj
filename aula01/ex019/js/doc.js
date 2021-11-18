let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')

nome.addEventListener('focus', function(){
    console.log('entrou no elemento')
})

nome.addEventListener('blur', function(){
    sobrenome.focus()
})