
const cofre1 = document.getElementById("cofre1");
const cofre2 = document.getElementById("cofre2");
const cofre3 = document.getElementById("cofre3");

const cofres = [cofre1, cofre2, cofre3];

const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");
const vitoriasTexto = document.getElementById("vitorias");
const reiniciar = document.getElementById("jogar-novamente");

let tentativa = 0;
let vitoria = 0;
let rodadaEncerrada = false;
let cofreCerto = sortearCofre();

function sortearCofre() {
    return Math.floor(Math.random() * 3) + 1;
}

function atualizarPlacar() {
    tentativasTexto.textContent = "Tentativas: " + tentativa;
    vitoriasTexto.textContent = "Vitórias: " + vitoria;
}

function adivinharCofre(numero) {
    if (rodadaEncerrada) {
        return;
    }

    const cofreEscolhido = cofres[numero - 1];

    if (cofreEscolhido.disabled) {
        return;
    }

    tentativa++;
    atualizarPlacar();

    if (numero === cofreCerto) {
        vitoria++;
        rodadaEncerrada = true;

        mensagem.textContent =
            "Você encontrou o prêmio! Parabéns!";

        cofres.forEach(function(cofre, indice) {
            cofre.disabled = true;

            if (indice + 1 === cofreCerto) {
                cofre.classList.add("premiado");
                cofre.textContent = " Cofre " + (indice + 1);
            } else {
                cofre.classList.add("vazio");
                cofre.textContent = "Cofre " + (indice + 1);
            }
        });

        atualizarPlacar();

    } else {
        mensagem.textContent =
            "O cofre " + numero +
            " está vazio! Tente outro.";

        cofreEscolhido.classList.add("vazio");
        cofreEscolhido.textContent = "❌ Cofre " + numero;
        cofreEscolhido.disabled = true;

        const aindaDisponivel = cofres.some(function(cofre) {
            return !cofre.disabled;
        });

        if (!aindaDisponivel) {
            rodadaEncerrada = true;
            mensagem.textContent =
                "Fim de rodada! Você não encontrou o prêmio.";
        }
    }
}

cofre1.addEventListener("click", function() {
    adivinharCofre(1);
});

cofre2.addEventListener("click", function() {
    adivinharCofre(2);
});

cofre3.addEventListener("click", function() {
    adivinharCofre(3);
});

reiniciar.addEventListener("click", function() {
    cofreCerto = sortearCofre();

    tentativa = 0;
    rodadaEncerrada = false;

    mensagem.textContent = "Novo sorteio! Escolha um cofre.";

    cofres.forEach(function(cofre, indice) {
        cofre.disabled = false;

        cofre.classList.remove("premiado", "vazio");

        cofre.textContent = "Cofre " + (indice + 1);
    });

    atualizarPlacar();
});

atualizarPlacar();
