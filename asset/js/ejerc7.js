document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCalcular").addEventListener("click", calcular);
    document.getElementById("btnSalir").addEventListener("click", salir);
});

function calcular() {
    const horas = parseFloat(document.getElementById("horas").value);
    const tarifa = parseFloat(document.getElementById("tarifa").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(horas) || horas <= 0) {
        resultado.innerHTML = "¡Ingrese horas válidas!";
        return;
    }

    if (isNaN(tarifa) || tarifa <= 0) {
        resultado.innerHTML = "¡Ingrese una tarifa válida!";
        return;
    }

    let salario = 0;

    if (horas <= 40) {
        salario = horas * tarifa;
    } else {
        const horasNormales = 40;
        const horasExtras = horas - 40;

        const pagoNormal = horasNormales * tarifa;
        const pagoExtra = horasExtras * (tarifa * 1.5); // 50% adicional

        salario = pagoNormal + pagoExtra;
    }

    resultado.innerHTML = "Salario del trabajador es: $ " + salario.toLocaleString("es-CO");
}

function salir() {
    document.getElementById("horas").value = "";
    document.getElementById("tarifa").value = "";
    document.getElementById("resultado").innerHTML = "";
}
