import { scores } from './add-render.js';
import { scoreBoard } from './add-render.js';

const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bJm7lusovv0OQQFfuvEx/scores/";

export async function getScores() {
  const response = await fetch(requestURL);
  const scoresArr = await response.json();
  const devScores = scoresArr.result;

  let scoreHTML = ``;
  devScores.forEach(player => {
    scoreHTML +=
    `
    <li class="single-score">
      <p class="name">${player.user}</p>
      <p class="score">${player.score}</p>
    </li>
    ` 
  })
  scoreBoard.innerHTML = scoreHTML;
  // for (let scoreObj of devScores) {
  //   scores.push(scoreObj);
  // }
};  








// async function setGame() {
//   const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
//   const request = new Request(requestURL);

//   const response = await fetch(request, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'name': 'Happy Devs'
//     })
//   })

//   const gameID = await response.json();
//   console.log(gameID);
// }

// setGame(); //Set a condition... If game doesn't exist, setGame
//Game ID: bpLwHtek8IZYib7x7AC3

