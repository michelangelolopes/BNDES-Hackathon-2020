function showForm() {
    document.getElementById("form-createID").style.display = "block";
}
function closeForm() {
    document.getElementById("form-createID").style.display = "none";
    document.getElementById("span-error").innerHTML = "";
}

function novoEvento() {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let infos = document.getElementById("infos").value;
    let partida = document.getElementById("partida").value;
    let destino = document.getElementById("destino").value;
    let numVagas = document.getElementById("numVagas").value;
    if ((titulo == "") || (infos == "") || (partida == "") || (destino == "") || (numVagas == "")) {
        document.getElementById("span-error").innerHTML = "Por favor, preencha os dados corretamente.";
        return false;
    }
    else {
      document.getElementById("span-error").innerHTML = "";  
    }
    
    let divSubMain = document.createElement("DIV");
    divSubMain.className = "sub-main";
    
    let article = document.createElement("ARTICLE");
    article.className = "caronas-box";
    
    let divIEB = document.createElement("DIV");
    divIEB.className = "img-caronas-box";
    
    let divInfoEvent = document.createElement("DIV");
    divInfoEvent.className = "info-caronas";
    
    let h2 = document.createElement("H2");
    h2.className = "title-caronas";
    
    let h3 = document.createElement("H3");
    h3.className = "created-caronas";
    
    let p1 = document.createElement("P");
    p1.className = "p-caronas";
    
    let p2 = document.createElement("P");
    p2.className = "p-caronas";
    
    let p3 = document.createElement("P");
    p3.className = "p-caronas";
    
    let p4 = document.createElement("P");
    p4.className = "p-caronas";
    
    let btn = document.createElement("BUTTON");
    btn.className = "btn-action";
    
    let iDE = document.createElement("I");
    iDE.className = "fa fa-street-view";
    
    let iDHE = document.createElement("I");
    iDHE.className = "fa fa-map-marker";
    
    let iDGr = document.createElement("I");
    iDGr.className = "fa fa-group";
    
    let iDel = document.createElement("I");
    iDel.className = "fa fa-trash-o";
    
    
    btn.addEventListener('click', function() {
        let del = document.getElementById("main-evento");
        del.removeChild(divSubMain);
    })
    
    
    document.getElementById("main-evento").appendChild(divSubMain);
    
    divSubMain.appendChild(article);
    
    article.appendChild(divIEB);
    
    article.appendChild(divInfoEvent);
    
    divInfoEvent.appendChild(h2);
    
    divInfoEvent.appendChild(h3);
    
    divInfoEvent.appendChild(p1);
    
    divInfoEvent.appendChild(p2);
    p2.appendChild(iDE);
    
    divInfoEvent.appendChild(p3);
    p3.appendChild(iDHE);
    
    divInfoEvent.appendChild(p4);
    p4.appendChild(iDGr);
    
    divInfoEvent.appendChild(btn);
    
    btn.appendChild(iDel);
    
    let h2Txt = document.createTextNode(titulo);
    h2.appendChild(h2Txt);
    
    let h3Txt = document.createTextNode("Criado por você");
    h3.appendChild(h3Txt);
    
    let p1Txt = document.createTextNode(" Informações: " + infos);
    p1.appendChild(p1Txt);
    
    let p2Txt = document.createTextNode(" Local de partida: " + partida);
    p2.appendChild(p2Txt);
    
    let p3Txt = document.createTextNode(" Destino: " + destino);
    p3.appendChild(p3Txt);
    
    let p4Txt = document.createTextNode(" N° de vagas: " + numVagas);
    p4.appendChild(p4Txt);
    
    let btnTxT = document.createTextNode(" Excluir minha carona");
    btn.appendChild(btnTxT);
    
    document.getElementById("form-createID").style.display = "none";
    
}