const ricoTriste = document.getElementById("ricoTriste");
const pobreFeliz = document.getElementById("pobreFeliz");
const arena = document.getElementById("arena");
const mensagem = document.getElementById("mensagem");

let tentativa = 0;

ricoTriste.addEventListener("mouseenter", function (){
    tentativa++;

    const largura = arena.clientWidth - ricoTriste.offsetWidth;
    const altura = arena.clientHeight - ricoTriste.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    ricoTriste.style.left = x + 'px';
    ricoTriste.style.top = y + 'px';

    mensagem.textContent = " Tentativas de clicar no ricoTriste:" + tentativa;
});

pobreFeliz.addEventListener("click", function(){
    mensagem.textContent = "Sorria! Você tem 10.000 mil de empréstimos para pagar!"
});
