// Acessando o CONTEUDO E MODIFICANDO
let titulo = document.querySelector('.titulo');

titulo.textContent = 'Viturino Nutricionista';
//--
var pacientes = document.querySelectorAll(".paciente");

for( let i = 0; i < pacientes.length; i++){
    
    let paciente = pacientes[i];

    //PESO
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    // ALTURA
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    // IMC
    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = true;
    var alturaEhValida = true;

    // CONDICIONAIS
    if (peso <= 0 || peso >= 300) {
        console.log('Peso Invalido');
        pesoEhValido = false; // só entra aqui se o valor for invalido
        tdImc.textContent = 'Peso está Inválido';
        paciente.classList.add('paciente-invalido');
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log('Altura Invalida');
        alturaEhValida = false; // só entra aqui se o valor for invalido
        tdImc.textContent = 'Altura está Inválida';
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
    
}


var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click',function(event){  
    event.preventDefault();
 
    let form = document.querySelector('#form-adiciona');
   
    // PEGANDO O VALOR DO INPUT
    // Lembrando que usamos o NAME do INPUT 
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    // CRIANDO O ELEMENTO TR VAZIO
    let pacienteTr = document.createElement("tr");
    
    // CRIANDO ELEMENTO TD VAZIO
    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');
    
    // PEGANDO A TD criada e pegando o VALORES dos INPUT 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // PEGANDO a TR e ADICIONANDO ELEMENTO DENTRO DELA COMO FILHO
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    
    
    
});

