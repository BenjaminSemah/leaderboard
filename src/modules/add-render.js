export const scoreBoard = document.querySelector('#score-board');
export const nameInput = document.querySelector('.name-input');
export const scoreInput = document.querySelector('.score-input');

export const scores = [];
export const renderScore = () => {
  let scoreHTML = '';

  scores.forEach((player) => {
    scoreHTML
      += `
      <li class="single-score">
        <p class="name">${player.name}</p>
        <p class="score">${player.score}</p>
      </li>
      `;
  });
  scoreBoard.innerHTML = scoreHTML;
};

export const addScore = () => {
  scores.push(
    {
      name: nameInput.value.trim(),
      score: scoreInput.value.trim(),
    },
  );
  nameInput.value = '';
  scoreInput.value = '';
};