const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function inputMyText(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMyText();
  }
}


function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }
  // enter 키로 메시지를 전송하고 나면 textarea 태그는 초기화가 제대로 되어야 합니다.
  input.value = '';
}

send.addEventListener('click', sendMyText);
input.addEventListener('keypress', inputMyText);