function abrirPopUpE() {
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.visibility = "visible";
    let newEvento = document.getElementById("nome-evento").innerHTML;
    document.getElementById("inner-popup").innerHTML = "Você entrou no grupo de evento " + newEvento + ".";
}
function fecharPopUp() {
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.visibility = "hidden";
}

function abrirPopUpC() {
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.visibility = "visible";
    let newCar = document.getElementById("nome-carona").innerHTML;
    document.getElementById("inner-popup").innerHTML = "Você entrou no grupo de evento " + newCar + ".";
}
function abrirPopUpC2() {
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.visibility = "visible";
    let newCar = document.getElementById("nome-carona2").innerHTML;
    document.getElementById("inner-popup").innerHTML = "Você entrou no grupo de evento " + newCar + ".";
}
function abrirPopUpC3() {
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.visibility = "visible";
    let newCar = document.getElementById("nome-carona3").innerHTML;
    document.getElementById("inner-popup").innerHTML = "Você entrou no grupo de evento " + newCar + ".";
}
function fecharPopUp() {
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.visibility = "hidden";
}