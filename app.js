alert('Bem-vindo(a) ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('Número secreto:', numeroSecreto);
let palpite = prompt(`Adivinhe o número secreto entre 1 e ${numeroMaximo}:`);
let msgErro = '⚠️ Por favor, insira um número válido.';
let tentativas = 1;

while (palpite != numeroSecreto) {
    if (palpite === null || palpite === "") {
        alert(msgErro);
    } else {
        alert(`Que pena! Você errou. 😞`);
        if (palpite < numeroSecreto) {
            alert('Dica: O número secreto é maior que o seu palpite.');
        } else {
            alert('Dica: O número secreto é menor que o seu palpite.');
        }
        tentativas++;
    }
    palpite = prompt(`Tente novamente. Adivinhe o número secreto entre 1 e ${numeroMaximo}:`);
}
let msgTentativas = `Parabéns! 😃 Você adivinhou o número secreto: ${numeroSecreto} com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}.`;
alert(msgTentativas);