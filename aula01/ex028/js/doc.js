let form = $('form')
let res = $('.res')

form.on('submit', 
function(event){
    event.preventDefault()

    let data = $(this).serialize()
    console.log(data)
})