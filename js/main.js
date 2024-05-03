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