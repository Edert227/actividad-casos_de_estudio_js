function calcular() {
    let numeroPersonas = parseInt(document.getElementById("personas").value);
    let resultado = document.getElementById("resultado");

    if (numeroPersonas <= 0 || isNaN(numeroPersonas)) {
        resultado.textContent = "¡Ingrese un número válido!";
        return;
    }

    let costoPorPersona;

    if (numeroPersonas <= 200) {
        costoPorPersona = 25000;
    } else if (numeroPersonas <= 300) {
        costoPorPersona = 18500;
    } else {
        costoPorPersona = 16000;
    }

    let total = numeroPersonas * costoPorPersona;

    resultado.textContent = "Presupuesto total: $ " + total.toLocaleString("es-CO");
}

function salir() {
    window.close(); // Cierra la pestaña (si el navegador lo permite)
}
