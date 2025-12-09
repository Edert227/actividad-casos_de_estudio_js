function calcular() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let tipo = document.getElementById("tipoHamburguesa").value;
    let pago = document.getElementById("tipoPago").value;
    let resultado = document.getElementById("resultado");

    if (cantidad <= 0 || isNaN(cantidad)) {
        resultado.textContent = "¡Ingrese una cantidad válida!";
        return;
    }

    let precioUnit;

    if (tipo === "sencilla") {
        precioUnit = 20000;
    } else if (tipo === "doble") {
        precioUnit = 25000;
    } else {
        precioUnit = 28000;
    }

    let totalSinCargo = precioUnit * cantidad;
    let cargo = (pago === "tarjeta") ? totalSinCargo * 0.07 : 0;
    let totalFinal = totalSinCargo + cargo;

    resultado.textContent =
        "Precio Unit.: $ " + precioUnit.toLocaleString("es-CO") +
        "\nCantidad: " + cantidad +
        "\nTipo de pago: " + (pago === "tarjeta" ? "Tarjeta" : "Efectivo") +
        "\nTotal sin cargo: $ " + totalSinCargo.toLocaleString("es-CO") +
        "\nEl cargo es: $ " + cargo.toLocaleString("es-CO") +
        "\nTotal a pagar es: $ " + totalFinal.toLocaleString("es-CO");
}

function salir() {
    window.close();
}
