function calcular() {
    let n = Number(document.getElementById("nivel").value);
    let riesgo = "";

    switch (n) {
        case 1: riesgo = "Riesgo biológico"; break;
        case 2: riesgo = "Riesgo químico"; break;
        case 3: riesgo = "Riesgo físico"; break;
        case 4: riesgo = "Riesgo ergonómico"; break;
        case 5: riesgo = "Riesgo psicosocial"; break;
        default: riesgo = "Nivel de riesgo no válido."; break;
    }

    document.getElementById("resultado").textContent = riesgo;
}