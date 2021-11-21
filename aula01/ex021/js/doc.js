let res = document.getElementById('res')
let text = document.getElementById('text')
text.addEventListener('keypress', function(event){
    if(event.key.charCodeAt() == 69){
        res.style.display = 'block'
    }
})