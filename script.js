let formNotas = document.querySelector("#formNotas");
let btnConfigAv = document.querySelector("#btnConfigAv");
let qtdNotas = document.querySelector("#qtdNotas");
let mediaMateria = document.querySelector("#mediaMateria");
let contNotas;

function configurarAvalicao() {
    if (qtdNotas.value <= 0 || mediaMateria.value <= 0) { 
        let mensagem = document.createElement("p");
        mensagem.textContent = "Insira valores maior que 0";
        formNotas.appendChild(mensagem);
        } else {
            contNotas = Number(qtdNotas.value);

            return true;
        }
}

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


btnConfigAv.addEventListener("click", () => {
    if(configurarAvalicao()){
        calcularMedia9
;        let mensagemSucesso = document.createElement("p");
        mensagemSucesso.textContent = "sucesso";
        formNotas.appendChild(mensagemSucesso);
    }

})
