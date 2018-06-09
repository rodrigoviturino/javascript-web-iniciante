let btnAdicionar = document.querySelector('#buscar-pacientes');

    btnAdicionar.addEventListener('click',function(){
      let xhr = new XMLHttpRequest();

      xhr.open('GET','http://api-pacientes.herokuapp.com/pacientes');

      xhr.addEventListener('load',function(){
          console.log(xhr.response);
      });

      xhr.send();

    });
