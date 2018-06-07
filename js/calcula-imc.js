// Acessando o CONTEUDO E MODIFICANDO
let titulo = document.querySelector('.titulo');

titulo.textContent = 'Viturino Nutricionista';
//--
let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    //PESO
    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;

    // ALTURA
    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;

    // IMC
    let tdImc = paciente.querySelector('.info-imc');

    let pesoEhValido = validaPeso(peso); // Retorna TRUE ou FALSE
    let alturaEhValida = validaAltura(altura); // Retorna TRUE ou FALSE


    
    // ------------ CONDICIONAL VALOR INVÁLIDO -------------
    // SÓ ENTRA SE O VALOR FOR INVÁLIDO
    if (!pesoEhValido) {
        console.log('Peso Invalido');
        pesoEhValido = false; // só entra aqui se o valor for invalido
        tdImc.textContent = 'Peso está Inválido';
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaEhValida) {
        console.log('Altura Invalida');
        alturaEhValida = false; // só entra aqui se o valor for invalido
        tdImc.textContent = 'Altura está Inválida';
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        let imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

function validaPeso(peso) { 
    if(peso >= 0 && peso <= 300){
        return true;
    } else {
        return false;
    }
 };

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
};


function calculaImc(peso,altura){
    var imc = 0;
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

