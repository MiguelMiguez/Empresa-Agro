/* var button = document.getElementById('openButton')
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
document.querySelector(".ContainerPasarelaLogos").appendChild(copy);
 */
document.addEventListener("DOMContentLoaded", function() {
    // Obtener los datos del JSON
    fetch('../json/productos.json')
        .then(response => response.json())
        .then(data => {
            // Llamar a la función para renderizar la categoría con los datos obtenidos
            renderizarCategoria(data[0]); // Cambio aquí: data[0]
        })
        .catch(error => console.error('Error al cargar el JSON:', error));

    // Manejar clic en los elementos de la clase ContainerInsumos
    var containerInsumos = document.querySelectorAll('.ContainerInsumos');
    containerInsumos.forEach(function(element) {
        element.addEventListener('click', function() {
            var categoriaId = this.classList[1]; // Obtener el segundo nombre de la clase
            window.location.href = "./categoria.html?id=" + categoriaId;
        });
    });

    function renderizarCategoria(data) {
        // Generar la estructura HTML dinámicamente
        var categoriaContainer = document.createElement('div');
        categoriaContainer.classList.add('ContainerCategoria');
    
        var imagenesHTML = '';
        data.imagenes.forEach(function(imagen) {
            imagenesHTML += `<img src="${imagen}" alt="${data.nombre}">`;
        });
    
        categoriaContainer.innerHTML = `
            <div class="ContainerTittleCategoria"><h2>${data.nombre}</h2></div>
            <div class="ContainerBrandCategoria">
                ${imagenesHTML}
            </div>
            <div class="ContainerDescripcionCategoria">
                <div class="DescripcionCategoria">
                    <p>${data.descripcion}</p>
                    <form action="../php/contacto.php" method="POST">
                        <div class="ContainerForm">
                            <div class="ContainerTittleForm">
                                <h2>¡contactanos!</h2>
                            </div>
                            <div class="ContainerFormGroup">
                                <div class="FormGroup">
                                    <input type="text" id="name" name="name" required placeholder="nombre">
                                </div>
                                <div class="FormGroup">     
                                    <input type="email" id="email" name="email" required placeholder="email">
                                </div>
                                <div class="FormGroup">
                                    <input type="number" id="number" name="number" required placeholder="telefono">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        `;
    
        // Agregar la estructura generada al cuerpo del documento
        document.body.appendChild(categoriaContainer);
    }
});

