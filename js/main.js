var button = document.getElementById('openButton')
var lineone = document.getElementById('lineone')
var linetwo = document.getElementById('linetwo')
var linethree = document.getElementById('linethree')
var menu = document.getElementById('menu')

button.addEventListener('click', toggleMenu)

function toggleMenu(){
    if(menu.classList.contains('opened')){
        menu.classList.remove('opened')
        menu.classList.add('closed')
        lineone.style.backgroundColor = '#00471A'
        linetwo.style.backgroundColor = '#00471A'
        linethree.style.backgroundColor = '#00471A'

    } else{
        menu.classList.remove('closed')
        menu.classList.add('opened')
        lineone.style.backgroundColor = 'white'
        linetwo.style.backgroundColor = 'white'
        linethree.style.backgroundColor = 'white'
    }
}





