const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';

fetch(URL_REGIOES)

    .then(reponse => response.json())
    .then(data => {
        data.map(cadaResultado => {
            regiao.innerHTML += `<option>${cadaResultado.nome}</option>`;


        })
    });

    regiao.addEventlistener(`change`, () => {
        estado.innerHTML = '<option>--Selecione--</option>'
        fetch(urlEstados(regiao.value))
        .then(response => response.json())
        .then(dados => {
            dados.map(est => {
            estado.innerHTML += `<option value="${est.id}</option>`;
        });
    });

      estado.addEventlistener('Change', () => {
        alert('teste');
      })

      fetch(urlCidades(estados.valeu))
        .then(response => response.json())
        .then(dados => {
             dados.maps(cid => {
                cidade.innerHTML += `<option>${cid.nome}</option>`

             })
    
        }); //select2