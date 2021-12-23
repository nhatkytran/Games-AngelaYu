const $ = document.querySelector.bind(document);

const randomNumber1 = Math.floor(Math.random()*6) + 1;
const randomNumber2 = Math.floor(Math.random()*6) + 1;

const player1 = $('.img1');
const player2 = $('.img2');

player1.src = `./images/dice${randomNumber1}.png`;
player2.src = `./images/dice${randomNumber2}.png`;

const winner = $('.win');

if (randomNumber1 > randomNumber2) {
    winner.innerText = 'Player 1 Wins!';
}
else if (randomNumber1 < randomNumber2) {
    winner.innerText = 'Player 2 Wins!';
}
else {
    winner.innerText = 'Draw!';
}