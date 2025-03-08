// Selecionando elementos do DOM
const atividadeInput = document.querySelector("#id-atividade");
const notaInput = document.querySelector ("#id-nota");
const submitbutton = document.querySelector("#submit-button");
const tabela = document.querySelector("#bodyTable");
const notaMinima = parseFloat(prompt("digite a nota miníma para aprovação!"))

// Definindo imagens de aprovado e reprovado
const imgAprovado = `<img src="./images/aprovado.png"></img>`
const imgReprovado = `<img src="./images/reprovado.png"></img>`

// Exibindo resultado final
    const alunoAprovado = '<span class="aprovado">Aprovado</span>'
    const alunoReprovado = '<span class="reprovado">Reprovado</span>'

//Criando uma lista que ira armazenar as atividades para que nao haja duplicidade
const atividadesRegistradas = new Set();
const notasRegistradas = [];

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
        <td>${notaValue >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        return novaLinha
}

// Funcao para calculo da media final
    function calculoDeMedia(){
        if (notasRegistradas.length === 0) return 0;    
        const somaDasNotas = notasRegistradas.reduce((total, nota) => total + nota, 0);
        return somaDasNotas / notasRegistradas.length; 
    }

    function Resultado(){
        const mediaFinal = calculoDeMedia();
        console.log(mediaFinal);

        document.querySelector("#resultado-media").innerHTML = mediaFinal.toFixed(2);
        document.querySelector("#situacao-aluno").innerHTML = mediaFinal >= notaMinima ? alunoAprovado : alunoReprovado;
    }

// Criando um evento para quando o Botao Adicionar for clicado
submitbutton.addEventListener('click', (e) => {
    e.preventDefault() // impede que a pagina recarregue ao enviar clicar o botao
    
    //Guardando os valores preenchidos pelo usuario
    const atividadeValue = atividadeInput.value.trim();
    const notaValue = parseFloat(notaInput.value);

    if (validarDados(atividadeValue, notaValue)) {
        atividadesRegistradas.add(atividadeValue);// adiciona a atividade a lista de atividades registradas
        notasRegistradas.push(notaValue) // adiciona a nota a lista de notas registradas

        const novaLinha = criarLinha(atividadeValue, notaValue);
        tabela.appendChild(novaLinha); // Cria uma nova linha 
    
        limparCampos();

        calculoDeMedia();

        Resultado();

        console.log(atividadesRegistradas);
        
    }

});