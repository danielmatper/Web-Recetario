
// Esperar a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el botón por su ID
    let BotonTortilla = document.getElementById("BotonTortilla");
    // Segundo botón
    let BotonEnsalada = document.getElementById("BotonEnsalada");

    // Agregamos el evento de clic para redirigir a la página de Tortilla
    BotonTortilla.addEventListener("click", function () {
        window.open("https://es.wikipedia.org/wiki/Tortilla_de_patatas", "_blank");
    });

    // Agregamos el evento de clic para redirigir a la página de Ensalada César
    BotonEnsalada.addEventListener("click", function () {
        window.open("https://es.wikipedia.org/wiki/Ensalada_C%C3%A9sar", "_blank");
    });
});