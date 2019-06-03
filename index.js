function addEvent(){
  alert('I was clicked!');
  }

function addingEventListener() {
const input = document.getElementById('input');
input.addEventListener('click', addEvent);
}
