function calcular() {
    let precio = parseFloat(document.getElementById("precio").value);
    let resultado = document.getElementById("resultado");

    if (precio <= 0 || isNaN(precio)) {
        resultado.textContent = "¡Ingrese un precio válido!";
        return;
    }

    let porcentaje, descuento, total;

    if (precio > 125000) {
        porcentaje = 0.35;
    } else {
        porcentaje = 0.10;
    }

    descuento = precio * porcentaje;
    total = precio - descuento;

    resultado.textContent =
        "Descuento: $ " + descuento.toLocaleString("es-CO") +
        "\nPorcentaje: " + porcentaje + " %" +
        "\nTotal a pagar: $ " + total.toLocaleString("es-CO");
}

function salir() {
    window.close();
}
