let menuHamburguesa = document.getElementById('menuHamburguesa')
let buttonToggleMenu = document.getElementById('buttonToggleMenu')
let lineone = document.getElementById('lineone')
let linetwo = document.getElementById('linetwo')
let linethree = document.getElementById('linethree')

buttonToggleMenu.addEventListener('click', () =>{
    if(!menuHamburguesa.classList.contains('opened')){
        menuHamburguesa.classList.add('opened')
        lineone.style.top = '50%'
        lineone.style.transform = 'rotate(45deg)'
        linetwo.style.width = '0'
        linethree.style.top = '50%'
        linethree.style.transform = 'rotate(-45deg)'
    }else{
        menuHamburguesa.classList.remove('opened')
        lineone.style.top = '0'
        lineone.style.transform = 'rotate(0)'
        linetwo.style.width = '100%'
        linethree.style.top = '100%'
        linethree.style.transform = 'rotate(0)'
    }
})


let mision = document.getElementById('mision')
let buttondown = document.getElementById ('buttondown')

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
document.querySelector(".ContainerPasarelaLogos").appendChild(copy.cloneNode(true));
document.querySelector(".ContainerPasarelaLogos").appendChild(copy.cloneNode(true));
document.querySelector(".ContainerPasarelaLogos").appendChild(copy.cloneNode(true));
