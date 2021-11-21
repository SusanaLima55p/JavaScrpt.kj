/*
box.fadeOut(0) --> desaparece em(segundos)
box.fadeIn(5000) --> aparece em(segundos)
*/

let box = $('.box')
let botao = $('#start')

/*
botao.click(
function(){
    box.animate({
        width: '200px',
        height: '200px',
        left: '500'
    },1000)
})
*/
let bo = ''
botao.on('click', 
function(){
    
    if(bo =='ativado'){
        box.animate({
            left: '0'
        },1000)
      bo = ''
    } else if(bo == '') {
          box.animate({
            width: '200px',
            height: '200px',
            left: '500'
        }, 1000)
        bo = 'ativado'
    } 
})
