var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll('.paciente');

    if(this.value.length > 0) {

      // Pegando todos itens do array
      for(let i=0; i < pacientes.length; i++) {
          // Pegando cada item pela Class e
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector('.info-nome');
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value,"i");
// Tive que inverter a logica porque ele estava colocando a class 'invisivel'
            if(!expressao.test(nome)){
            //if(nome != this.value){ // Neste caso o THIS é o PACIENTES[i], estamos dentro do BLOCO
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        }
    } else {
      for(let i = 0; i < pacientes.length; i++){
          let paciente = pacientes[i];
          paciente.classList.remove('invisivel');
      }
    }




});
