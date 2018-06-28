var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('table');
tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut');

    // SetTimeout:  ele segura o elemento por tanto segundos e depois remove
    setTimeout(function(){
        event.target.parentNode.remove();
      },500);

 // Este é o jeito certo de fazer, mas é exemplo tbm, usando EVENT, como funciona o EVENT
    // let alvoEvento = event.target; // aqui esta selecionando 'DIV PAI'
    // let paiEvento = alvoEvento.parentNode; // vira uma 'TR' da vida

    // paiEvento.remove();

})


// Esse foi de exemplo, so para entendermos onde esta o erro, de apagar toda a tabela PAI
// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick',function(){
//         this.remove(); // this é o dono do evento, quem ta escutando? paciente
//     });
// });
