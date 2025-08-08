alert('Bem-vindo(a) ao jogo do número secreto!');
let numeroSecreto = 92;
console.log('Número secreto:', numeroSecreto);
let palpite = prompt('Adivinhe o número secreto entre 1 e 100:');
let msgErro = 'Por favor, insira um número válido.';

if (palpite == numeroSecreto) {
    alert(`Parabéns! Você adivinhou o número secreto: ${numeroSecreto}`);
} else {
    alert(`Que pena! O número secreto era: ${numeroSecreto}`);

}