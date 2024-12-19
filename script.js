var hamburger_menu;
var wallet_container;
var support_container;
var design_container;
var big_wrapper;
var products;
var prevBtn;
var nextBtn;
var active = 0;
function declare() {
    big_wrapper = document.getElementById('big-wrapper');
    // Hamburger container
    hamburger_menu = document.getElementById('hamburger-menu');
    // Icons containers
    wallet_container = document.getElementById('wallet');
    support_container = document.getElementById('support');
    design_container = document.getElementById('design');
    products = document.querySelectorAll(".packages-container .package")
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    //console.log("hamburger:", hamburger_menu);
    
}

function loadIcons() {
    // Cargar la animación
    var wallet = lottie.loadAnimation({
        container: wallet_container, // El contenedor donde se mostrará la animación
        renderer: 'svg',  // Usar SVG como renderizador
        loop: true,       // La animación será en bucle
        autoplay: true,   // La animación comenzará automáticamente
        path: 'assets/icons/wallet.json' // Ruta al archivo JSON de la animación
    });

    var support = lottie.loadAnimation({
        container: support_container, 
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
        path: 'assets/icons/support.json'
    });

    var design = lottie.loadAnimation({
        container: design_container, 
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
        path: 'assets/icons/design.json'
    });
}

function events(){
    if (hamburger_menu) {
        hamburger_menu.addEventListener("click", () => {
            big_wrapper.classList.toggle("active");
        });
    }
}

function showCarrousel(){
    products.forEach((product, index) => {
        if (index === active) {
            product.style.zIndex = 2; // Elemento activo al frente
            product.style.transition = "opacity 0.5s ease-in-out"; // Animación suave
            let children = product.querySelectorAll('*');  // Seleccionamos todos los elementos dentro de 'product'
            children.forEach(child => {
                child.style.zIndex = 2;  // Asignamos el mismo z-index que el contenedor
            });
        } else {
            product.style.zIndex = 1; // Elemento inactivo al fondo
            let children = product.querySelectorAll('*');
            children.forEach(child => {
                child.style.zIndex = 1;  // Asignamos el mismo z-index que el contenedor
            });
        }
    });
    
}
function next(){
    nextBtn.onclick=function(){
        active = active + 1 < products.length ? active + 1 : active;
        showCarrousel();
    }
}
function prev(){
    prevBtn.onclick=function(){
        active = active - 1 >= 0 ? active - 1 : active;
        showCarrousel();
        console.log(active)
    }
}
document.addEventListener("DOMContentLoaded", () => {
    declare();
    loadIcons();
    events();
    showCarrousel();
    next();
    prev();
});
