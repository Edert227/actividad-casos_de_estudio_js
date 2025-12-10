function calcular() {
    let peso = Number(document.getElementById("peso").value);
    let est = Number(document.getElementById("estatura").value);

    let imc = peso / (est * est);
    let diag = "";

    if (imc < 16) diag = "Criterio de ingreso en hospital";
    else if (imc < 17) diag = "Infrapeso";
    else if (imc < 18) diag = "Bajo peso";
    else if (imc < 25) diag = "Peso normal";
    else if (imc < 30) diag = "Sobrepeso (Obesidad de grado I)";
    else if (imc < 35) diag = "Sobrepeso crónico (Obesidad de grado II)";
    else if (imc < 40) diag = "Sobrepeso crónico (Obesidad de grado III)";
    else diag = "Obesidad mórbida (Obesidad de grado IV)";

    document.getElementById("resultado").textContent =
        `IMC: ${imc.toFixed(2)} - ${diag}`;
}