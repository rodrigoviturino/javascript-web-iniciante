let btnAdicionar = document.querySelector('#buscar-pacientes');

    btnAdicionar.addEventListener('click',function(){
      // Criando uma REQUISIÇÂO HTTP
      let xhr = new XMLHttpRequest();

      //Configurando a Requisição com o metodo OPEN/ABRIR,vai ACESSAR o ENDEREÇO
      xhr.open('GET','http://api-pacientes.herokuapp.com/pacientes');
      // Quando clicar no botão, ele vai CARREGAR a LISTA da API
      xhr.addEventListener('load',function(){

          if(xhr.status == 200){
            // Selecionando o 'SPAN' e adicionando a 'CLASS' invisivel
            let erroAjax = document.querySelector('#erro-ajax');
            erroAjax.classList.add('invisivel');

            let resposta = xhr.response; // retorna OBJETO

            // REQUISIÇÂO COM O AJAX
            let pacientes = JSON.parse(resposta); // retorna ARRAY
            
            // PARA CADA item do ARRAY, estamos pegando 1 por 1
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
          } else {
            console.log(xhr.status);
            console.log(xhr.responseText);


            erroAjax.classList.add('mensagemErro');
            erroAjax.classList.remove('invisivel');
          }


      });
      // vai ENVIAR a REQUISIÇÂO HTTP
      xhr.send();

    });
