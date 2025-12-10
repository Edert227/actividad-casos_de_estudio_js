function calcular() {
    let n = Number(document.getElementById("num").value);

    if (!Number.isInteger(n)) {
        document.getElementById("resultado").textContent = "¡Ingrese un número válido!";
        return;
    }

    document.getElementById("resultado").textContent =
        (n % 2 === 0) ? "Es un número par" : "Es un número impar";
}