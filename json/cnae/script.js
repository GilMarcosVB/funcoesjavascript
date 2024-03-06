document.addEventListener("DOMContentLoaded", async function () {
    const listaMunicipios = document.getElementById("list");


    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');
    const dados = await resposta.json();
    dados.forEach(function (cnea) {

        const li = document.createElement('li');
        const ul = document.createElement('ul');


        li.textContent = `${cnea.descricao.observacoes}`;

        listaMunicipios.appendChild(li);


    
    });
}
)   