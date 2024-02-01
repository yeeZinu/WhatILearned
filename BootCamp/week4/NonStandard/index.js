const fields = document.querySelectorAll('[data-field]');
const task = {
    title: '코드 에디터 개발',
    manager: 'CastleRing, Raccoon Lee',
    status: '',
};

for (let tag of fields) {
    const field = tag.dataset.field;
    tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');
console.log(btns);
for (let btn of btns) {
    console.log(btn);
    const status = btn.dataset.status;
    console.log(status);
    btn.onclick = function () {
        fields[2].textContent = status;
        fields[2].dataset.status = status;
    };
}
