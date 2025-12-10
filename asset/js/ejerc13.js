function calcular() {
    let a = Number(document.getElementById("l1").value);
    let b = Number(document.getElementById("l2").value);
    let c = Number(document.getElementById("l3").value);

    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("resultado").textContent = "¡Valor no válido!";
        return;
    }

    if (a === b && b === c)
        document.getElementById("resultado").textContent = "Es un triángulo equilátero";
    else if (a === b || a === c || b === c)
        document.getElementById("resultado").textContent = "Es un triángulo isósceles";
    else
        document.getElementById("resultado").textContent = "Es un triángulo escaleno";
}