let btnRef = document.querySelectorAll('.btn-opcao');
let popupRef = document.querySelector('.popup');
let novoJogoBtn = document.getElementById('novo-jogo');
let reiniciarBtn = document.getElementById('reiniciar');
let msgRef = document.getElementById('mensagem');
let padraoVitoria = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, , 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;

btnRef.forEach((element) => {
  element.addEventListener('click', () => {
    if (xTurn) {
      xTurn = false;
      element.innerText = 'X';
      element.disabled = true;
    } else {
      xTurn = true;
      element.disabled = 'O';
      element.disabled = true;
    }
  });
});
