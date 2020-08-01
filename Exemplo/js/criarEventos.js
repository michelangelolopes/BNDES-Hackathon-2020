var eventosCadastrados = [];
var eventoJson, i, j, array;

function cadastrarEvento() {
    
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let localizacao = document.getElementById("localizacao").value;

    var evento = [];
    evento[0] = titulo;
    evento[1] = localizacao;
    evento[2] = descricao;
    evento[3] = data.toString().split('-').reverse().join('/');
    evento[4] = hora;
	
    eventosCadastrados.push(evento);

    eventoJson = JSON.stringify(eventosCadastrados);
    localStorage.setItem("eventoJ", eventoJson)
}


function mostrarEvento() {

    function novoEvento() {
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
        
        divInfoEvent.appendChild(btn);
        
        divInfoEvent.appendChild(btn2);

       for (i = 0; i < eventosCadastrados.length; i++){
           for (j = 0; j < eventosCadastrados[i].length; j++){
            let h2Txt = document.createTextNode(eventosCadastrados[i][0]);
            h2.appendChild(h2Txt);
            
            let h3Txt = document.createTextNode("Criado por quem");
            h3.appendChild(h3Txt);
            
            let p1Txt = document.createTextNode(eventosCadastrados[i][2]);
            p1.appendChild(p1Txt);
            
            let p2Txt = document.createTextNode(eventosCadastrados[i][3,4]);
            p2.appendChild(p2Txt);
            
            let p3Txt = document.createTextNode(eventosCadastrados[i][1]);
            p3.appendChild(p3Txt);
            
           }
       }
            let btnTxT = document.createTextNode("+ Criar carona para evento");
    btn.appendChild(btnTxT);
    
    let btn2TxT = document.createTextNode("Entrar em grupo de carona");
    btn2.appendChild(btn2TxT);
   
    
}
                
           
  
   evento = eventosCadastrados[0]; 
   
     
    //document.getElementById("eventoTitulo").innerHTML = evento[0];
   // document.getElementById("eventoLocalizacao").innerHTML = evento[1];
    //document.getElementById("eventoDescricao").innerHTML = evento[2];
   // document.getElementById("eventoDataHora").innerHTML = "Dia: " + evento[3] + " / " + "Hora: " + evento[4];

   
    
}
    function testando(){
        cadastrarEvento();
        mostrarEvento();

        console.log("eventosCadastrados[]: " + eventosCadastrados);
        console.log("JSON cadastrar evento: " + eventoJson)
        //console.log("evento: " + evento);
        console.log("array: " + array);
        //console.log("j: " + j);
    }