function calcular() {
    let t = Number(document.getElementById("temp").value);
    let r = "";

    if (t < 0) r = "Clima helado";
    else if (t < 10) r = "Clima muy frío";
    else if (t < 20) r = "Clima frío";
    else if (t < 30) r = "Normal";
    else if (t < 40) r = "Hace calor";
    else r = "Hace mucho calor";

    document.getElementById("resultado").textContent = r;
}