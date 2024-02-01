const element = document.querySelector('button.like');
if (element) {
  element.addEventListener('click', handleClickLike);
}

function handleClickLike(e) {
  e.target.classList.toggle('liked');
}
