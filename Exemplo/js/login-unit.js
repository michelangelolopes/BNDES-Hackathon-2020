function abrirPopUp() {
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("inner-popup").innerHTML = "Usuário não encontrado. Por favor, verifique seu email e senha.";
    return false;
}
function abrirPopUp2() {
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("inner-popup").innerHTML = "Cadastro efetuado com sucesso!";
    return false;
}
function validarLogin() {
    let email = document.getElementById("logEmail").value;
    let emailTratado = email.toLowerCase().split("@").toString();
    let senha = document.getElementById("logSenha").value;
    
    if ((!email) || (!senha)) {

            event.preventDefault();
            if ((email == "") || (emailTratado.search("edu.unirio.br") == -1 && emailTratado.search("uniriotec") == -1 )) {
                document.getElementById("logEmail-erro").innerHTML = "Entre com um email UNIRIO cadastrado.";
                document.getElementById("logEmail").style.borderColor = "red";
                document.getElementById("logEmail").focus();
                return false;
            }
            else {
                document.getElementById("logEmail-erro").innerHTML = "";
                document.getElementById("logEmail").style.borderColor = "#b4b4b475";
            }
            if ((senha == "") || (senha.length < 6)) {
                document.getElementById("logSenha-erro").innerHTML = "Senha inválida.";
                document.getElementById("logSenha").style.borderColor = "red";
                document.getElementById("logSenha").focus();
                return false;
            }
            else {
                document.getElementById("logSenha-erro").innerHTML = "";
                document.getElementById("logSenha").style.borderColor = "#b4b4b475";
            }
        }
     
    if (email === "cironogueira@uniriotec.br" && senha === "123456") {
      return true;
    }
    else {
        abrirPopUp();
        return false;
    }
}



let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"));
//usuariosCadastrados = [];

function validarCadastro() {
    
    let nome = document.getElementById("cadNome").value;
    let curso = document.getElementById("cadCurso").value;
    let email = document.getElementById("cadEmail").value;
    let emailTratado = email.toLowerCase().split("@").toString();
    let senha = document.getElementById("cadSenha").value;
    let usuario = {
        nome: nome,
        curso: curso,
        email: email,
        senha: senha
    };
    
    if ((!nome) || (!curso) || (!email) || (email == "cironogueira@edu.unirio.br") || (!senha)) {

        event.preventDefault();
        if (nome == "") {
            document.getElementById("cadNome-erro").innerHTML = "Nome obrigatório.";
            document.getElementById("cadNome").style.borderColor = "red";
            document.getElementById("cadNome").focus();
            return false;        
        }
        else {
            document.getElementById("cadNome-erro").innerHTML = "";
            document.getElementById("cadNome").style.borderColor = "#b4b4b475";
        }
        
        if (curso == "") {
            document.getElementById("cadCurso-erro").innerHTML = "Curso obrigatório.";
            document.getElementById("cadCurso").style.borderColor = "red";
            document.getElementById("cadCurso").focus();
            return false;        
        }
        else {
            document.getElementById("cadCurso-erro").innerHTML = "";
            document.getElementById("cadCurso").style.borderColor = "#b4b4b475";
        }
        
        if (email == "") {
            document.getElementById("cadEmail-erro").innerHTML = "Email obrigatório.";
            document.getElementById("cadEmail").style.borderColor = "red";
            document.getElementById("cadEmail").focus();
            return false;
        }
        else {
            document.getElementById("cadEmail-erro").innerHTML = "";
            document.getElementById("cadEmail").style.borderColor = "#b4b4b475";
        }
        
        if (emailTratado.search("edu.unirio.br") == -1 && emailTratado.search("uniriotec.com") == -1) {
            document.getElementById("cadEmail-erro").innerHTML = "Entre com um email universitário UNIRIO.";
            document.getElementById("cadEmail").style.borderColor = "red";
            document.getElementById("cadEmail").focus();
            return false;
        }
        else {
            document.getElementById("cadEmail-erro").innerHTML = "";
            document.getElementById("cadEmail").style.borderColor = "#b4b4b475";
        }
        
        if (email == "cironogueira@uniriotec.br") {
            document.getElementById("cadEmail-erro").innerHTML = "Este email já está cadastrado.";
            document.getElementById("cadEmail").style.borderColor = "red";
            document.getElementById("cadEmail").focus();
            return false;
        }
        else {
            document.getElementById("cadEmail-erro").innerHTML = "";
            document.getElementById("cadEmail").style.borderColor = "#b4b4b475";
        }
        
        if (senha == "") {
            document.getElementById("cadSenha-erro").innerHTML = "Senha obrigatória.";
            document.getElementById("cadSenha").style.borderColor = "red";
            document.getElementById("cadSenha").focus();
            return false;
        }
        else {
            document.getElementById("cadSenha-erro").innerHTML = "";
            document.getElementById("cadSenha").style.borderColor = "#b4b4b475";
        }
    }
    else {
        event.preventDefault();
        if (!usuariosCadastrados) {
            usuariosCadastrados = [];
        }
        else {
            usuariosCadastrados.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));
            abrirPopUp2();
            document.getElementById("cadNome-erro").innerHTML = "";
            document.getElementById("cadNome").style.borderColor = "#b4b4b475";
            document.getElementById("cadCurso-erro").innerHTML = "";
            document.getElementById("cadCurso").style.borderColor = "#b4b4b475";
            document.getElementById("cadEmail-erro").innerHTML = "";
            document.getElementById("cadEmail").style.borderColor = "#b4b4b475";
            document.getElementById("cadSenha-erro").innerHTML = "";
            document.getElementById("cadSenha").style.borderColor = "#b4b4b475";
        }
    }
}