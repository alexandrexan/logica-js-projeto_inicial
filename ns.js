let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto); // Para depuração, pode ser removido depois
let tentativas = 0;
const resultado = document.querySelector('.resultado');
const botao = document.querySelector('.botao');
const input = document.querySelector('#NumeroSecreto');

botao.addEventListener('click', function() {
    let palpite = input.value;
        tentativas++;

        if (palpite === '' || isNaN(palpite)) {
                resultado.textContent = '⚠️ Por favor, insira um número válido.';
                tentativas--;
                return;
            }

            palpite = parseInt(palpite);

            if (palpite > numeroMaximo) {
                resultado.textContent = '⚠️ Por favor, insira um número entre 1 e 50.';
                tentativas--;
                return;
            }

            if (palpite === numeroSecreto) {
                resultado.innerHTML = `<div class="mensagem-acerto">
                    Parabéns! Você adivinhou o número secreto: <span class="numero-secreto">${numeroSecreto}</span> com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!
                </div>`;
                botao.disabled = true;
                
                // Criar e adicionar botão de recomeçar
                const botaoRecomecar = document.createElement('button');
                botaoRecomecar.textContent = 'Jogar Novamente';
                botaoRecomecar.className = 'botao-recomecar';
                resultado.after(botaoRecomecar);
                
                botaoRecomecar.addEventListener('click', function() {
                    // Reiniciar o jogo
                    numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
                    tentativas = 0;
                    botao.disabled = false;
                    resultado.innerHTML = '';
                    input.value = '';
                    input.focus();
                    botaoRecomecar.style.display = 'none';
                });
                
                botaoRecomecar.style.display = 'block';
            } else {
                let mensagem = 'Que pena! Você errou.<br>';
                if (palpite < numeroSecreto) {
                    mensagem += '<span class="dica-texto">Dica:</span> O número secreto é <span class="maiorMenor">maior</span> que o seu palpite.';
                } else {
                    mensagem += '<span class="dica-texto">Dica:</span> O número secreto é <span class="maiorMenor">menor</span> que o seu palpite.';
                }
                resultado.innerHTML = mensagem; //Mudança de textContent para innerHTML para colocar span e mudar a cor da palavra "Dica"
            }

            input.value = '';
            input.focus();
        });

        const canvas = document.getElementById("matrix");
        const ctx = canvas.getContext("2d");

        // Ajusta tamanho do canvas para tela inteira
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        // Opção 1: Cor RGB fixa
        //const color = "#ff0000ff";

        // Opção 2: Função para gerar cores RGB aleatórias
        function getRandomRGBColor() {
            const colors = [
                '#ff0000ff',
                '#00ff00ff',
                '#0000ffff' 
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        const color = getRandomRGBColor();

        // Caracteres que vão "cair"
        const numbers = "0123456789";
        const fontSize = 16;
        const columns = canvas.width / fontSize;

        // Array para controlar a "chuva"
        const drops = [];
        for (let i = 0; i < columns; i++) {
        drops[i] = 1;
        }

        function draw() {
        // Fundo preto com leve transparência (efeito rastro)
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Estilo dos números
        ctx.fillStyle = getRandomRGBColor();
        ctx.font = fontSize + "px monospace";

        // Desenha os números
        for (let i = 0; i < drops.length; i++) {
        const text = numbers.charAt(Math.floor(Math.random() * numbers.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reinicia a queda
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
        }

        drops[i]++;
        }
    }

    setInterval(draw, 60);

    // Ajusta se mudar o tamanho da tela
    let resizeTimeout;
    window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }, 250);
});