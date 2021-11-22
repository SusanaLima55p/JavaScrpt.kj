let link = $('.menu li a')
let subir = $('.bnt')

$(window).scroll(function(){
    var minhaposicao = $(this).scrollTop()
    if(minhaposicao >= 1200){
        subir.fadeIn()
    } else {
        subir.fadeOut()
    }
    console.log(minhaposicao)
})

link.on('click', function(){
    let seletor = $(this).attr('href')
    let posicao = $(seletor).offset().top
    $('html, body').animate({scrollTop: posicao-60},1500)
})

subir.on('click', function(){
    $('html, body').animate({scrollTop: 0},1500)
})