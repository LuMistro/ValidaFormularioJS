function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nascimento = document.getElementById("nascimento").value;


    if (nome == "") {
        document.getElementById("nome").style.border = "thin solid red ";
        valido = false;
    } else {
        document.getElementById("nome").style.border = "none "
        valido = true;
    }
    if (email == "") {
        document.getElementById("email").style.border = "thin solid red ";
        valido = false;
    } else {
        document.getElementById("email").style.border = "none"
        valido = true;
    }
    if (nascimento == "") {
        document.getElementById("nascimento").style.border = "thin solid red ";
        valido = false;
    } else {
        document.getElementById("nascimento").style.border = "none"
        valido = true;
    }

    if (valido) {
        const pessoa = new Pessoa(nome, email, nascimento);

        const tabela = document.getElementById("dados");
        const tbody = tabela.getElementsByTagName("tbody")[0];

        const novaLinha = tbody.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        const textoNome = document.createTextNode(pessoa.nome);
        celulaNome.appendChild(textoNome);

        const celulaEmail = novaLinha.insertCell(1);
        const textoEmail = document.createTextNode(pessoa.email);
        celulaEmail.appendChild(textoEmail);

        const celulaNascimento = novaLinha.insertCell(2);
        const dataFormatada = pessoa.getNascimento();
        const textoNascimento = document.createTextNode(dataFormatada);
        celulaNascimento.appendChild(textoNascimento);

        const celulaIdade = novaLinha.insertCell(3);
        const idade = pessoa.getIdade();
        const textoIdade = document.createTextNode(idade);
        celulaIdade.appendChild(textoIdade);

        limparFormulario();
    }
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento").value = "";
}
