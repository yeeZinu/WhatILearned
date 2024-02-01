// showTitle 함수를 완성해 주세요
function showTitle(e) {
	if (e.target.dataset.title) {
	  const span = document.createElement('span');
	  span.classList.add('title');
	  span.textContent = e.target.dataset.title;
	  e.target.append(span);
	}
  }
  

// removeTitle 함수를 완성해 주세요
function removeTitle(e) {
	if (e.target.dataset.title) {
	  e.target.lastElementChild.remove();
	}
  }
  

// '대상'과 '타입'을 수정해 주세요
const map = document.querySelector('.map');
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);

/**
앞서 만든 두 이벤트 핸들러를 하나의 요소 노드에만 등록해도 각 태그에 이벤트가 동작하도록 해주세요.

이벤트 위임을 고려했을 때 어떤 요소 노드에 이벤트 핸들러를 등록하면 좋을지 대상 부분을 수정해 주세요.

이벤트 위임을 고려했을 때 각각 타입의 이벤트로 이벤트 핸들러를 등록하면 좋을지 타입 부분을 수정해 주세요.
 */