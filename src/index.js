import './style.css';
import { renderScore, addScore } from './modules/add-render.js';
import { getScores } from './modules/lead-api.js';

const refreshBtn = document.querySelector('#refresh-btn');
// const submitBtn = document.querySelector('#submit-btn');

// submitBtn.addEventListener('click', () => {
//   addScore();
//   renderScore();
//   console.log("submit")
// });


window.addEventListener('pageshow', () => {
  console.log('Window!');
  getScores();
})

refreshBtn.addEventListener('click', () => {
  console.log('Refresh!');
  getScores();
  // renderScore();
})

