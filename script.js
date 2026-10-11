let formNotas = document.querySelector("#formNotas");
let btnConfigAv = document.querySelector("#btnConfigAv");
let qtdNotas = document.querySelector("#qtdNotas");
let mediaMateria = document.querySelector("#mediaMateria");
let contNotas;

function configurarAvaliacao() {
    let mensagem = document.querySelector("#mensagem");
    if ((qtdNotas.value <= 0 || mediaMateria.value <= 0 || qtdNotas.value === '' || mediaMateria.value === '') || Number(qtdNotas.value) % 1 !== 0) {
        mensagem.textContent = "Erro! Insira valores válidos.";
        return false;
    } else {
        mensagem.textContent = "";
        contNotas = Number(qtdNotas.value);
        return true;
    }
}

function criarCampoNotas() {
    let campoNotas = document.querySelector("#campoNotas");
    campoNotas.innerHTML = "";

    let notasContainer = document.createElement("div");
    notasContainer.classList.add("notasContainer");

    let btnCampoNotas = document.createElement("button");
    btnCampoNotas.type = "button";
    btnCampoNotas.id = "btnCampoNotas";
    btnCampoNotas.textContent = "enviar notas";

    for (let i = 0; i  < contNotas; i++) {

        let notaBox = document.createElement("div");
        notaBox.classList.add("notaBox");

        let inputNota  = document.createElement("input");
        inputNota.classList.add("inputNota");
        inputNota.placeholder = `adicione a nota ${i + 1}`
        inputNota.id = `inputNota${i + 1}`;
        inputNota.setAttribute("type", "number");
        inputNota.required = true;
        inputNota.min = 0;

        let labelNota = document.createElement("label");
        labelNota.id = `labelNota${i + 1}`;
        labelNota.setAttribute("for", `inputNota${i + 1}`);
        labelNota.textContent = `Nota: ${i + 1}`;

        notaBox.appendChild(labelNota);
        notaBox.appendChild(inputNota);
        notasContainer.appendChild(notaBox);
    }
    campoNotas.appendChild(notasContainer);
    campoNotas.appendChild(btnCampoNotas);

    return true;
}

function calcularMedia() {

    let campoResultado = document.querySelector("#campoResultado");
    campoResultado.innerHTML = "";

    let resultadoContainer = document.createElement("div");
    resultadoContainer.classList.add("resultadosContainer");

    let  inputNotas = document.querySelectorAll(".inputNota");

    let somaNotas = 0;

    let mensagemErro = document.createElement("p");
    mensagemErro.id = "mensagemErro";

    for (let i = 0; i < inputNotas.length; i++) {
        let valor = inputNotas[i].value;

        if (valor === "") {
            mensagemErro.textContent = "Erro! Insira o valor das notas";
            resultadoContainer.appendChild(mensagemErro);
            campoResultado.appendChild(resultadoContainer);

            return false;
        } else if (Number(valor) < 0) {
            mensagemErro.textContent = "Erro! Insira valores positivos nos campos de notas.";
            resultadoContainer.appendChild(mensagemErro);
            campoResultado.appendChild(resultadoContainer);

            return false;
        } else {
            somaNotas += Number(valor);
        }
    }

    let mediaUsuario = somaNotas / contNotas;
    let mediaMinima = Number(mediaMateria.value);

    let h3Mensagem = document.createElement("h3");
    h3Mensagem.id = "h3Mensagem";

    let pMensagem = document.createElement("p");
    pMensagem.id = "pMensagem";

    if (mediaUsuario >= mediaMinima) {
        h3Mensagem.textContent = "Parabéns!";
        pMensagem.textContent = `Parabéns! você conquistou uma média de ${mediaUsuario.toFixed(2)}.`;
    } else {
        h3Mensagem.textContent = "Não foi dessa vez :(";
        pMensagem.textContent = `Você conquistou uma média de ${mediaUsuario.toFixed(2)}. Faltaram ${(mediaMinima - mediaUsuario).toFixed(2)} pontos para atingir a média mínima.`;
    }

    resultadoContainer.appendChild(h3Mensagem);
    resultadoContainer.appendChild(pMensagem);
    campoResultado.appendChild(resultadoContainer);

    return true;
}

btnConfigAv.addEventListener("click", () => {
    if (configurarAvaliacao()) {
        criarCampoNotas();
        document.querySelector("#btnCampoNotas").addEventListener("click", calcularMedia);
    }
})
