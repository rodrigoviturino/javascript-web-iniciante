
// FORMULARIO
    var botaoAdicionar = document.querySelector('#adicionar-paciente');

    botaoAdicionar.addEventListener('click', function (event) {
      event.preventDefault();
    // ACESSANDO OS CAMPOS DO FORM
    let form = document.querySelector('#form-adiciona');

    // EXTRAINDO OS VALORES DO INPUT
    // Lembrando que usamos o NAME do INPUT
    let paciente = obtemPacienteDoFormulario(form); // OBJETO

    // MontaTr,MontaTd, Pega VALOR INPUT, JUNTA TD DENTRO DA TR
    // Esse cara tem as informações do INPUT e PREENCHE a TABELA
    // let pacienteTr = montaTr(paciente);

    // MENSAGEM/ARRAY DE ERROS
    let erros = validaPaciente(paciente);
    console.log(erros);
    // SE o paciente for INVALIDO
        if(erros.length > 0){
            exibeMensagensDeErro(erros);
            //var mensagemErro = document.querySelector('#mensagem-erro');
            return;
        }

// LIMPANDO OS CAMPOS APÓS, SER ADICIONAR PACIENTE NA TABELA
form.reset();

// APÓS DAR ERRO E ADICIONAR, NAO VAI LIMPAR A TELA DE ERRO, COM ISSO AGORA VAI !!!
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = "";

});
// FIM FUNÇÃO DO BOTÃO

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    // Adicionando na TABELA
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}



// JOGANDO ERROS NA UL LI
function exibeMensagensDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro');

    ul.innerHTML = ""; // innerHTML: ele pega o elemento, no caso é LI
        erros.forEach(function(erro) {
            let li = document.createElement('li');
                li.textContent = erro;
                ul.appendChild(li);
        });
  }


/* ------------------------------- FUNÇÕES ----------------------------- */
function obtemPacienteDoFormulario(form){
    // FORM está mandando para nós o VALOR DO INPUT
    // Essa VARIAVEL está pegando o VALOR DO INPUT DO FORM QUE O USUARIO DIGITA
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function montaTr(paciente) {
    // CRIANDO ELEMENTO
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente'); // Ao CRIAR o TR já ADICIONA uma CLASS


    // ALTERANDO CONTEUDO DO TEXTO DAS TD
    let nomeTd = montaTd(paciente.nome, 'info-nome');
    let pesoTd = montaTd(paciente.peso, 'info-peso');
    let alturaTd = montaTd(paciente.altura, 'info-altura');
    let gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    let imcTd = montaTd(paciente.imc, 'info-imc');

    // COLOCANDO OS FILHOS TD DENTRO DO PAI TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

// Retorna o pacienteTd porque ele está COM TODAS INFORMAÇÕES
    return pacienteTr;
};

// Esse é o esquema de inserir CLASS e o CONTEUDO TEXTO na TD
function montaTd(dado,classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td;
};


// PACIENTE INVALIDO
function validaPaciente(paciente) {

    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O Nome pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida');
    }

// -------------------------- VALIDANDO SE O PACIENTE DEIXAR O CAMPO EM BRANCO ----------------------

    if(paciente.gordura.length == 0){
        erros.push('A Gordura do paciente não pode ser em branco');
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ficar em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("Altrura não pode ser em branco.");
    }

    return erros;
}
