import './style.css';
import { addScores , getScores, userInput, scoreInput } from './modules/lead-api.js';

const submitBtn = document.querySelector("#submit-btn");
const failAlert = document.querySelector('.fail-alert');
const refreshBtn = document.querySelector('#refresh-btn');

window.addEventListener('pageshow', () => {
  getScores();
})

refreshBtn.addEventListener('click', () => {
  getScores();
})

submitBtn.addEventListener("click", () => {
  console.log('Submit');
  if (
    isNaN(scoreInput.value) === true ||
    scoreInput.value === "" ||
    userInput.value === ""
  ) {
    console.log('Fail');
    scoreInput.value = '';
    failAlert.innerHTML = 'Submission failed. Try again.'
  } else {
    console.log('Pass');
    addScores();
  }
});

scoreInput.addEventListener('click', () => {
  console.log('ScoreInput');
  failAlert.innerHTML = '';
})
