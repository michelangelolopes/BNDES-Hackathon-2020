function trocarOn() {
    document.getElementById("login").classList.add("esconder");
    document.getElementById("cadastro").classList.add("mostrar");
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("cadastro").style.visibility = "visible";
}
function trocarOff() {
    document.getElementById("cadastro").classList.remove("mostrar");
    document.getElementById("login").classList.remove("esconder");
    document.getElementById("cadastro").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
}


function mouseDentroBsi() {
   document.getElementById("link-bsi").src = "imagens/BSI-link.png";
}

function mouseForaBsi() {
   document.getElementById("link-bsi").src = "imagens/BSI-pb-link.png";
}


function mouseDentroUni() {
   document.getElementById("link-uni").src = "imagens/UNIRIO-link.png"
}
function mouseForaUni() {
   document.getElementById("link-uni").src = "imagens/UNIRIO-pb-link.png";
}