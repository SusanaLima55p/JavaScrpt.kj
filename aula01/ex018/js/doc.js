let linguagens = document.getElementById('linguagens')

linguagens.addEventListener('change', function(){
    let ini = (this.selectedIndex)
    console.log(linguagens[ini].text)
})