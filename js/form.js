
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
    let pacienteTr = montaTr(paciente);


    var erro = validaPaciente(paciente);
    // SE o paciente for INVALIDO
        if(erro.length > 0){
            var mensagemErro = document.querySelector('#mensagem-erro');
            mensagemErro.textContent = erro;
            return;
        }

    // Tabela
    let tabela = document.querySelector('#tabela-pacientes');
    // ADICIONA o PACIENTE na TABELA
    tabela.appendChild(pacienteTr);

// LIMPANDO OS CAMPOS APÓS, SER ADICIONAR PACIENTE NA TABELA
form.reset();

}); // FIM FUNÇÃO DO BOTÃO




            /* ---------- FUNÇÕES ---------- */
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

function montaTd(dado,classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td;
};


// PACIENTE INVALIDO
function validaPaciente(paciente) {

    var erros = [];

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida');        
    }

    return erros;
}