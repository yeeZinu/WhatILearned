import { addBtn, addInput, list, rollBtn } from './tags.js';
// 여기에 코드를 작성하세요
import addMenu from './function/add.js';
import deleteMenu from './function/delete.js';
import rollMenu from './function/roll.js';


const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
rollBtn.addEventListener('click', () => list.classList.contains('rolling') || rollMenu(data));
