let formNotas = document.querySelector("#formNotas");
let btnConfigAv = document.querySelector("#btnConfigAv");
let qtdNotas = document.querySelector("#qtdNotas");
let mediaMateria = document.querySelector("#mediaMateria");
let contNotas;

function configurarAvalicao() {
    btnConfigAv.addEventListener("click", () => {
    if (qtdNotas.value <= 0 || mediaMateria.value <= 0) { 
        let mensagem = document.createElement("p");
        mensagem.textContent = "Insira valores maior que 0";
        formNotas.appendChild(mensagem);
        } else {
            contNotas = Number(qtdNotas.value);

            return true;
        }
    })
}
