document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnCalcular").addEventListener("click", calcular);
    document.getElementById("btnSalir").addEventListener("click", salir);
});

function calcular() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.innerHTML = "¡Ingrese una cantidad válida!";
        return;
    }

    let precioUnitario = (cantidad >= 1000) ? 49850 : 71290;

    const total = cantidad * precioUnitario;

    resultado.innerHTML = "Total a pagar es: $ " + total.toLocaleString("es-CO");
}

function salir() {
    document.getElementById("cantidad").value = "";
    document.getElementById("resultado").innerHTML = "";
}
