function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const zona = parseInt(document.getElementById("zona").value);

    const resultado = document.getElementById("resultado");

    // Validar peso
    if (isNaN(peso) || peso <= 0) {
        resultado.innerHTML = "❌ ¡Ingrese un peso válido!";
        return;
    }

    // Paquete demasiado pesado
    if (peso > 85) {
        resultado.innerHTML = `El paquete con peso de<br>${peso} kg excede el peso permitido`;
        return;
    }

    // Tabla de zonas
    let costoGramo = 0;

    switch (zona) {
        case 1: costoGramo = 210; break;
        case 2: costoGramo = 180; break;
        case 3: costoGramo = 220; break;
        case 4: costoGramo = 340; break;
        case 5: costoGramo = 370; break;
        default:
            resultado.innerHTML = "¡Zona no valida!";
            return;
    }

    // Calcular costo
    const pesoGramos = peso * 1000; 
    const valor = pesoGramos * costoGramo;

    resultado.innerHTML = `Valor: $ ${valor}`;
}

function salir() {
    document.getElementById("peso").value = "";
    document.getElementById("zona").value = "";
    document.getElementById("resultado").innerHTML = "";
}
