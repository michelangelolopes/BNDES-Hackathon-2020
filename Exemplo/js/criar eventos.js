let eventosCadastrados = [];
function cadastrarEvento() {
    let titulo = document.getElementById("titulo").value;
    let localizacao = document.getElementById("localizacao").value;
    let descricao = document.getElementById("descricao").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let evento ={
        titulo: titulo,
        localizacao: localizacao,
        descricao: descricao,
        data: data,
        hora: hora,
    };
    eventosCadastrados.push(evento);
    localStorage.setItem("evento", JSON.stringify(eventosCadastrados))

}