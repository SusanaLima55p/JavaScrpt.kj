let formu = document.querySelector('form')

formu.addEventListener('submit', function(evento){
    evento.preventDefault()
    let isvalid = true
    for(let i = 0; i < this.elements.length; i++){
        let item = this.elements[i]
        if(item.type !== 'submit'){
            if(item.value == ''){
                item.classList.add('error')
                isvalid = false
            } else {
                item.classList.remove('error')
            }
        }
    }
    console.log(isvalid)
})