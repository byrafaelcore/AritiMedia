let formNotas = document.querySelector("#formNotas");
let btnConfigAv = document.querySelector("#btnConfigAv");
let qtdNotas = document.querySelector("#qtdNotas");
let mediaMateria = document.querySelector("#mediaMateria");
let contNotas;
let somaNotas;

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
        console.log("oiii");

        let notaBox = document.createElement("div");
        notaBox.classList.add("notaBox");

        let inputNota  = document.createElement("input");
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

        somaNotas += Number(inputNota.value);

        console.log(campoNotas);
    }
    campoNotas.appendChild(notasContainer);
    campoNotas.appendChild(btnCampoNotas);

    return true;
}

btnConfigAv.addEventListener("click", () => {
    if (configurarAvaliacao()) {
        criarCampoNotas();
        alert("sucesso")
    }
})

/*
function adicionarCampoNotas() {
    for (let i = 0; i < contNotas; i++) {
        let campoNota = document.createElement("input");
        campoNota.type = "number";
        campoNota.id = `nota${i + 1}`;
        campoNota.label = `Nota: ${i + 1}`
        formNotas.appendChild(campoNota);
    } return true;
}

function calcularMedia() {
    if  (adicionarCampoNotas()) {
        let somaNotas = 0;
        for (i = 0; i < contNotas; i++) {
            let valorNota = Number(document.querySelectorAll(`#nota${i + 1}`).value);
            somaNotas += valorNota;
        }
        let valorMedia = Number(document.querySelector("#mediaMateria").value);
        let mediaConquistada = 0;
        mediaConquistada = somaNotas / valorMedia;
    }
    return true;
}
*/