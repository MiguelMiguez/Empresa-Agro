var button = document.getElementById('openButton')
var lineone = document.getElementById('lineone')
var linetwo = document.getElementById('linetwo')
var linethree = document.getElementById('linethree')
var menu = document.getElementById('menu')
let mision = document.getElementById('mision')
let buttondown = document.getElementById ('buttondown')


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


document.addEventListener("DOMContentLoaded", function(){
    buttondown.addEventListener('click', function(){
        let targetElement = document.getElementById ("mision");
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    });

});


let copy = document.querySelector(".LogoGallery").cloneNode(true);
document.querySelector(".ContainerPasarelaLogos").appendChild(copy.cloneNode(true));
document.querySelector(".ContainerPasarelaLogos").appendChild(copy.cloneNode(true));
document.querySelector(".ContainerPasarelaLogos").appendChild(copy.cloneNode(true));
