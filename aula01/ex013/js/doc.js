let js = document.getElementsByClassName('js')
let ar = [19, 24, 'olá', 1]

/*
for (let i = 0; i < js.length; i++){
    let texto = js[i].innerHTML 
    js[i].innerHTML = `curso ${texto} JavaScript`

    console.log(js[i])
}
*/

/*
ar.forEach(function(e, i){
    console.log(e, i)
})
*/

/*
ar.forEach(function(e, i){
    if (e == 01){
        ar[i] = 'vira outra coisa'
    }
})

console.log(ar)
*/

let nova = ar.map(function(e, i){
    if (e === 1){
        e = 'outra coisa'
    }

    return e
        
})

console.log(ar)