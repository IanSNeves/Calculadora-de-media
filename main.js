const atividadeInput = document.querySelector("#id-atividade");
const notaInput = document.querySelector ("#id-nota");
const submitbutton = document.querySelector("#submit-button");
const tabela = document.querySelector("#bodyTable");

const imgAprovado = `<img src="./images/aprovado.png"></img>`
const imgReprovado = `<img src="./images/reprovado.png"></img>`

submitbutton.addEventListener('click', (e) => {
    e.preventDefault()
    
    const atividadeValue = atividadeInput.value;
    const notaValue = parseFloat(notaInput.value);

    if (atividadeValue && !isNaN(notaValue)){
        if (notaValue >= 0 && notaValue <= 10){
        const novaLinha = document.createElement("tr");

        const colunaAtividade = document.createElement("td");
        colunaAtividade.textContent = atividadeValue;
        const colunaNota = document.createElement("td");
        colunaNota.textContent = notaValue;
        
        const colunaSituacao = document.createElement("td");
        
        colunaSituacao.innerHTML = notaValue >= 6 ? imgAprovado : imgReprovado;

        novaLinha.appendChild(colunaAtividade);
        novaLinha.appendChild(colunaNota);
        novaLinha.appendChild(colunaSituacao);

        tabela.appendChild(novaLinha);
    
    atividadeInput.value = "";
    notaInput.value = "";}
    else {
        alert("A nota da atividade deve ser um valor entre 0 e 10!")
    }
} else {
    alert("Por favor, preencha todos os campos!");
}

})