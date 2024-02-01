import { addMenu } from './add.js';
import { deleteMenu } from './delete.js';
// addBtn, addInput, list 를 import해 주세요
import { addBtn, addInput, list } from './tags.js';


const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
