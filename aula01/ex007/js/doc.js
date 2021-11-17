let carro = document.createElement('p')
carro.innerHTML = 'versa'

let sentra = document.createElement('p')
sentra.innerHTML = 'sentra'

document.getElementById('nissan').appendChild(carro)
document.getElementById('nissan').appendChild(sentra)
document.getElementById('nissan').removeChild(carro)