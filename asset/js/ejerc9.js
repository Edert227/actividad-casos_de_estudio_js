function calcular() {
    let g = Number(document.getElementById("grosor").value);
    let d = Number(document.getElementById("diametro").value);

    let r1 = "";
    if (d > 1.4) r1 = "La rueda es para un vehículo grande.";
    else if (d > 0.8) r1 = "La rueda es para un vehículo mediano.";
    else r1 = "La rueda es para un vehículo pequeño.";

    let r2 = "";
    if ((d > 1.4 && g < 0.4) || (d <= 1.4 && d > 0.8 && g < 0.25)) {
        r2 = "El grosor para esta rueda es inferior al recomendado.";
    }

    document.getElementById("resultado1").textContent = r1;
    document.getElementById("resultado2").textContent = r2;
}