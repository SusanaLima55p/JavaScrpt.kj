let link = document.getElementById('link')
let trs = document.getElementsByClassName('trs')


link.addEventListener('mouseover', function(){
    link.style.color = 'green'
})
link.addEventListener('mouseleave', function(){
    link.style.color = 'pink'
})

for(let i = 0; i < trs.length; i++){
    trs[i].addEventListener('mouseover', function(){
        console.log(this)
    })
}