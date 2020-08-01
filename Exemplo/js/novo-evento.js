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
    let criadoPor = document.getElementById("criadoPor").value;
    let descricao = document.getElementById("descricao").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let localizacao = document.getElementById("localizacao").value;
    if ((titulo == "") || (criadoPor == "") || (descricao == "") || (hora == "") || (localizacao == "")) {
        document.getElementById("span-error").innerHTML = "Por favor, preencha os dados corretamente.";
        return false;
    }
    else {
      document.getElementById("span-error").innerHTML = "";  
    }
    
    
    let divSubMain = document.createElement("DIV");
    divSubMain.className = "sub-main";
    
    let article = document.createElement("ARTICLE");
    article.className = "eventos-box";
    
    let divIEB = document.createElement("DIV");
    divIEB.className = "img-eventos-box";
    
    let divInfoEvent = document.createElement("DIV");
    divInfoEvent.className = "info-eventos";
    
    let h2 = document.createElement("H2");
    h2.className = "title-eventos";
    
    let h3 = document.createElement("H3");
    h3.className = "created-eventos";
    
    let p1 = document.createElement("P");
    p1.className = "p-eventos";
    
    let p2 = document.createElement("P");
    p2.className = "p-eventos";
    
    let p3 = document.createElement("P");
    p3.className = "p-eventos";
    
    let btn = document.createElement("BUTTON");
    btn.className = "btn-action";
    
    let btn2 = document.createElement("BUTTON");
    btn2.className = "btn-action";
    
    let iDE = document.createElement("I");
    iDE.className = "fa fa-clock-o";
    
    let iDHE = document.createElement("I");
    iDHE.className = "fa fa-map-marker";
    
    let iDel = document.createElement("I");
    iDel.className = "fa fa-trash-o";
    
    btn2.addEventListener('click', function() {
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
    
    divInfoEvent.appendChild(btn2);
    
    btn2.appendChild(iDel);
    
    let h2Txt = document.createTextNode(titulo);
    h2.appendChild(h2Txt);
    
    let h3Txt = document.createTextNode(criadoPor);
    h3.appendChild(h3Txt);
    
    let p1Txt = document.createTextNode(" Link ou descrição: " + descricao);
    p1.appendChild(p1Txt);
    
    let p2Txt = document.createTextNode(" Data/Hora: " + data.toString().split('-').reverse().join('/') + " / " + hora);
    p2.appendChild(p2Txt);
    
    let p3Txt = document.createTextNode(" Localização: " + localizacao);
    p3.appendChild(p3Txt);
    
    let btn2TxT = document.createTextNode(" Excluir evento");
    btn2.appendChild(btn2TxT);
    
    document.getElementById("form-createID").style.display = "none";
}

