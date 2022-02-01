import './style.css';
import { renderScore, addScore } from './modules/add-render.js';

const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
    addScore();
    renderScore();
})
