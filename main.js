// Selecionando elementos do DOM
const atividadeInput = document.querySelector("#id-atividade");
const notaInput = document.querySelector ("#id-nota");
const submitbutton = document.querySelector("#submit-button");
const tabela = document.querySelector("#bodyTable");

// Definindo imagens de aprovado e reprovado
const imgAprovado = `<img src="./images/aprovado.png"></img>`
const imgReprovado = `<img src="./images/reprovado.png"></img>`

//Criando uma lista que ira armazenar as atividades para que nao haja duplicidade
const atividadesRegistradas = new Set();


// Funcoes de validacao
// Funcao para limpar os campos
function limparCampos(){
    atividadeInput.value = "";
    notaInput.value = "";
}
// Funcao de validacao de de dados de entrada
function validarDados(atividadeValue, notaValue) {
    if (!atividadeValue || isNaN(notaValue)) {/* Verifica se os campos foram preenchidos corretamente */
alert ("Por favor, preencha os campos corretamente!")
    return false;
}
    if (notaValue < 0 || notaValue > 10) /* Verifica se a nota é um valor entre 0 e 10 */ {
        alert ("A nota deve ser um valor entre 0 e 10!")
        return false
}
    if (atividadesRegistradas.has(atividadeValue)){
        alert ("Essa atividade já foi registrada!")
        return false
    }
    return true
}
// Funcao que ira criar linhas na tabela do HTML com os dados preenchidos pelo usuario
        function criarLinha(atividadeValue, notaValue){
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
        <td>${atividadeValue}</td>
        <td>${notaValue}
        <td>${notaValue >= 6 ? imgAprovado : imgReprovado}</td>`;
        return novaLinha
}

// Criando um evento para quando o Botao Adicionar for clicado
submitbutton.addEventListener('click', (e) => {
    e.preventDefault() // impede que a pagina recarregue ao enviar clicar o botao
    
    //Guardando os valores preenchidos pelo usuario
    const atividadeValue = atividadeInput.value.trim();
    const notaValue = parseFloat(notaInput.value);

    if (validarDados(atividadeValue, notaValue)) {
        atividadesRegistradas.add(atividadeValue);// adiciona a atividade a lista de atividades registradas

        const novaLinha = criarLinha(atividadeValue, notaValue);
        tabela.appendChild(novaLinha); // Cria uma nova linha 
    
        limparCampos();

        console.log(atividadesRegistradas);
    }

});