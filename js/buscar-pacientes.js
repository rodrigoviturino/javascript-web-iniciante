let btnAdicionar = document.querySelector('#buscar-pacientes');

    btnAdicionar.addEventListener('click',function(){
      // Criando uma REQUISIÇÂO HTTP
      let xhr = new XMLHttpRequest();

      //Configurando a Requisição com o metodo OPEN/ABRIR,vai ACESSAR o ENDEREÇO
      xhr.open('GET','http://api-pacientes.herokuapp.com/pacientes');
      // Quando clicar no botão, ele vai CARREGAR a LISTA da API
      xhr.addEventListener('load',function(){
          let resposta = xhr.response;

          // REQUISIÇÂO COM O AJAX
          let pacientes = JSON.parse(resposta);
          // PARA CADA item do ARRAY, estamos pegando 1 por 1
          pacientes.forEach(function(paciente){
              adicionaPacienteNaTabela(paciente);
          });
      });
      // vai ENVIAR a REQUISIÇÂO HTTP
      xhr.send();

    });
