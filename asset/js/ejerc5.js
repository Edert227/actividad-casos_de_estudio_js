function calcular() {
    const tipo = document.getElementById("tipo").value;
    const tam = document.getElementById("tam").value;
    const precioInicial = parseFloat(document.getElementById("precio").value);
    const kilos = parseFloat(document.getElementById("kilos").value);
    const resultado = document.getElementById("resultado");

    // Validaciones básicas
    if (isNaN(precioInicial) || precioInicial <= 0) {
        resultado.textContent = "¡Ingrese un precio válido!";
        return;
    }
    if (isNaN(kilos) || kilos <= 0) {
        resultado.textContent = "¡Ingrese una cantidad de kilos válida!";
        return;
    }
    if (!(tipo === "P1" || tipo === "P2")) {
        resultado.textContent = "¡Tipo de panela no válido!";
        return;
    }
    if (!(tam === "1" || tam === "2")) {
        resultado.textContent = "¡Tamaño no válido!";
        return;
    }

    // Ajuste por tipo y tamaño
    let ajuste = 0; // puede ser positivo (agregar) o negativo (rebajar)
    if (tipo === "P1") {
        if (tam === "1") ajuste = 1200;
        else ajuste = 830;
    } else { // P2
        if (tam === "1") ajuste = -540;
        else ajuste = -350;
    }

    const precioPorKilo = precioInicial + ajuste;
    const gananciaTotal = precioPorKilo * kilos;

    // Formateo a moneda local (separadores)
    const precioForm = "$ " + precioPorKilo.toLocaleString("es-CO");
    const gananciaForm = "$ " + gananciaTotal.toLocaleString("es-CO");

    resultado.innerText =
        "Precio por kilo ajustado: " + precioForm +
        "\nKilos entregados: " + kilos +
        "\nLa ganancia es: " + gananciaForm;
}

// Reinicia los campos ( salir)
function reiniciar() {
    document.getElementById("tipo").value = "P1";
    document.getElementById("tam").value = "1";
    document.getElementById("precio").value = "";
    document.getElementById("kilos").value = "";
    document.getElementById("resultado").innerText = "";
}
