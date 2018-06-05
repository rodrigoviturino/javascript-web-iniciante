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


