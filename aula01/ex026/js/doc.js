let botao = $('button')
let mens = $('.mens')
reca = ''
botao.on('click', 
function(){
    
    if(reca == ''){
        mens.delay('slow').fadeOut(0)
        reca = 'ativo'
    } else if(reca == 'ativo'){
        mens.delay('fast').fadeIn(3000)
        reca = ''
    }
})